document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const screens = { 
        home: document.getElementById('home-screen'), 
        config: document.getElementById('config-screen'), 
        quiz: document.getElementById('quiz-screen'), 
        results: document.getElementById('results-screen') 
    };
    const buttons = { 
        startConfig: document.getElementById('start-config-btn'), 
        startQuiz: document.getElementById('start-quiz-btn'), 
        prev: document.getElementById('prev-btn'), 
        next: document.getElementById('next-btn'), 
        replay: document.getElementById('replay-btn'), 
        quit: document.getElementById('quit-btn'), 
        skip: document.getElementById('skip-btn'),
        fabNext: document.getElementById('fab-next')
    };
    const containers = { 
        themes: document.getElementById('themes-container'), 
        levels: document.getElementById('level-container'), 
        length: document.getElementById('length-container'), 
        questionText: document.getElementById('question-text'), 
        options: document.getElementById('options-container'), 
        wrongAnswers: document.getElementById('wrong-answers-list'), 
        themeScores: document.getElementById('theme-scores-container'), 
        quizScreen: document.getElementById('quiz-screen') 
    };
    const indicators = { 
        progress: document.getElementById('progress-indicator'), 
        timer: document.getElementById('timer'), 
        finalScore: document.getElementById('final-score'), 
        totalTime: document.getElementById('total-time'), 
        theme: document.getElementById('theme-text'),
        progressFill: document.getElementById('progress-fill')
    };

    // === State ===
    let allQuestions = [], currentQuizQuestions = [], currentQuestionIndex = 0, userAnswers = {}, timerInterval, secondsElapsed = 0, skippedCount = 0;

    const THEMES = ['Bases de données', 'HTML', 'CSS', 'JavaScript', 'PHP'];
    const LEVELS = ['mixte', 'debutant', 'intermediaire', 'avance'];
    const QUIZ_LENGTHS = { courte: 20, moyenne: 40, longue: 60 };
    const THEME_COLORS = { 
        'HTML': 'bg-red-500', 
        'CSS': 'bg-blue-500', 
        'JavaScript': 'bg-yellow-500', 
        'PHP': 'bg-indigo-500', 
        'Bases de données': 'bg-green-500' 
    };
    const THEME_FILES = { 
        'Bases de données': 'bases_de_donnees.json', 
        'HTML': 'html.json', 
        'CSS': 'css.json', 
        'JavaScript': 'javascript.json', 
        'PHP': 'php.json' 
    };

    // === Functions ===
    const themeToPrismLanguage = (theme) => ({ 
        'HTML': 'html', 
        'CSS': 'css', 
        'JavaScript': 'javascript', 
        'PHP': 'php', 
        'Bases de données': 'sql' 
    })[theme] || '';
    
    const escapeHTML = (str) => { 
        const p = document.createElement("p"); 
        p.textContent = str; 
        return p.innerHTML; 
    };

    const formatTextForDisplay = (text, theme) => {
        if (!text) return '';
        const language = themeToPrismLanguage(theme);
        const blockRegex = /```([\s\S]+?)```/g;
        const inlineRegex = /`([^`]+?)`/g;
        let formattedText = text;
        
        if (text.includes('```')) {
            return formattedText.replace(blockRegex, (match, codeContent) => 
                `<pre class="language-${language}"><code class="language-${language}">${escapeHTML(codeContent.trim())}</code></pre>`);
        }
        
        formattedText = escapeHTML(text);
        return formattedText.replace(inlineRegex, '<code>$1</code>');
    };

    const showScreen = (screenName) => { 
        Object.values(screens).forEach(screen => screen.classList.add('hidden')); 
        screens[screenName].classList.remove('hidden'); 
    };

    const loadAllQuestions = async () => {
        try {
            const responses = await Promise.all(
                Object.values(THEME_FILES).map(file => fetch(`./data/${file}`))
            );
            
            for (const response of responses) {
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status} for ${response.url}`);
                }
            }
            
            const dataArrays = await Promise.all(responses.map(res => res.json()));
            const flattenedQuestions = dataArrays.flat();
            const uniqueQuestions = [];
            const seenIds = new Set();
            
            for (const question of flattenedQuestions) {
                if (!seenIds.has(question.id)) {
                    uniqueQuestions.push(question);
                    seenIds.add(question.id);
                }
            }
            
            allQuestions = uniqueQuestions;
            populateConfigScreen();
        } catch (error) { 
            console.error("Error loading questions:", error); 
            containers.themes.innerHTML = `<p class="text-red-500 col-span-full">Impossible de charger les questions. Vérifiez le dossier 'data' et la console (F12).</p>`; 
        }
    };
    
    const populateConfigScreen = () => {
        containers.themes.innerHTML = THEMES.map(theme => 
            `<div class="theme-chip" data-theme="${theme}">
                <input type="checkbox" name="theme" value="${theme}" class="hidden">
                <span>${theme}</span>
            </div>`
        ).join('');
        
        containers.levels.innerHTML = LEVELS.map((level, index) => 
            `<div class="theme-chip ${index === 0 ? 'selected' : ''}" data-level="${level}">
                <input type="radio" name="level" value="${level}" class="hidden" ${index === 0 ? 'checked' : ''}>
                <span class="capitalize">${level}</span>
            </div>`
        ).join('');
        
        containers.length.innerHTML = Object.keys(QUIZ_LENGTHS).map((key, index) => 
            `<div class="theme-chip ${index === 0 ? 'selected' : ''}" data-length="${key}">
                <input type="radio" name="length" value="${key}" class="hidden" ${index === 0 ? 'checked' : ''}>
                <span class="capitalize">${key} (${QUIZ_LENGTHS[key]} questions)</span>
            </div>`
        ).join('');
        
        // Add event listeners for theme chips
        document.querySelectorAll('.theme-chip[data-theme]').forEach(chip => {
            chip.addEventListener('click', function() {
                const checkbox = this.querySelector('input');
                checkbox.checked = !checkbox.checked;
                this.classList.toggle('selected', checkbox.checked);
                validateConfig();
            });
        });
        
        // Add event listeners for level chips
        document.querySelectorAll('.theme-chip[data-level]').forEach(chip => {
            chip.addEventListener('click', function() {
                document.querySelectorAll('.theme-chip[data-level]').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                this.querySelector('input').checked = true;
                validateConfig();
            });
        });
        
        // Add event listeners for length chips
        document.querySelectorAll('.theme-chip[data-length]').forEach(chip => {
            chip.addEventListener('click', function() {
                document.querySelectorAll('.theme-chip[data-length]').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                this.querySelector('input').checked = true;
                validateConfig();
            });
        });
        
        validateConfig();
    };

    const validateConfig = () => { 
        buttons.startQuiz.disabled = document.querySelectorAll('input[name="theme"]:checked').length === 0; 
    };
    
    const shuffleArray = (array) => { 
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    };
    
    const startQuiz = () => {
        const selectedThemes = Array.from(document.querySelectorAll('input[name="theme"]:checked')).map(cb => cb.value);
        const selectedLevel = document.querySelector('input[name="level"]:checked').value;
        const desiredLength = QUIZ_LENGTHS[document.querySelector('input[name="length"]:checked').value];
        let finalQuestions = [];

        if (selectedLevel === 'mixte') {
            const proportions = { debutant: 0.5, intermediaire: 0.3, avance: 0.2 };
            const byLevel = { 
                debutant: shuffleArray(allQuestions.filter(q => q.niveau === 'debutant' && selectedThemes.includes(q.theme))), 
                intermediaire: shuffleArray(allQuestions.filter(q => q.niveau === 'intermediaire' && selectedThemes.includes(q.theme))), 
                avance: shuffleArray(allQuestions.filter(q => q.niveau === 'avance' && selectedThemes.includes(q.theme))) 
            };
            
            let dCount = Math.round(desiredLength * proportions.debutant);
            let iCount = Math.round(desiredLength * proportions.intermediaire);
            finalQuestions.push(
                ...byLevel.debutant.slice(0, dCount), 
                ...byLevel.intermediaire.slice(0, iCount), 
                ...byLevel.avance.slice(0, desiredLength - dCount - iCount)
            );
        } else {
            let pool = allQuestions.filter(q => q.niveau === selectedLevel && selectedThemes.includes(q.theme));
            const byTheme = {};
            selectedThemes.forEach(theme => { 
                byTheme[theme] = shuffleArray(pool.filter(q => q.theme === theme)); 
            });
            
            for (let i = 0; finalQuestions.length < desiredLength; i++) {
                let added = false;
                selectedThemes.forEach(theme => { 
                    if (byTheme[theme][i] && finalQuestions.length < desiredLength) { 
                        finalQuestions.push(byTheme[theme][i]); 
                        added = true; 
                    } 
                });
                if (!added) break;
            }
        }
        
        if (finalQuestions.length < desiredLength && finalQuestions.length > 0) { 
            alert(`Attention : seulement ${finalQuestions.length} questions sont disponibles.`); 
        }
        
        if (finalQuestions.length === 0) { 
            alert("Aucune question trouvée."); 
            return; 
        }
        
        currentQuizQuestions = shuffleArray(finalQuestions);
        currentQuestionIndex = 0; 
        userAnswers = {}; 
        secondsElapsed = 0; 
        skippedCount = 0;
        showScreen('quiz'); 
        displayQuestion(); 
        startTimer();
    };

    const displayQuestion = () => {
        const question = currentQuizQuestions[currentQuestionIndex];
        indicators.theme.textContent = question.theme;
        
        // Update progress bar
        const progressPercentage = ((currentQuestionIndex + 1) / currentQuizQuestions.length) * 100;
        indicators.progressFill.style.width = `${progressPercentage}%`;
        
        // Clear previous content
        containers.questionText.innerHTML = '';
        containers.options.innerHTML = '';
        
        // Set theme indicator
        const themeIndicator = document.getElementById('question-theme');
        themeIndicator.className = `theme-indicator`;
        themeIndicator.innerHTML = `
            <svg class="theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
            </svg>
            <span id="theme-text">${question.theme}</span>
        `;
        
        // Display question text
        containers.questionText.innerHTML = formatTextForDisplay(question.question, question.theme);
        
        // Get saved answer
        const savedAnswer = userAnswers[question.id];
        
        // Generate options based on question type
        let optionsHTML = '';
        if (question.type === 'choix_simple' || question.type === 'choix_multiple') {
            optionsHTML = question.options.map((option, index) => {
                const isChecked = savedAnswer && (
                    (question.type === 'choix_simple' && savedAnswer[0] === option) || 
                    (question.type === 'choix_multiple' && savedAnswer.includes(option))
                );
                
                return `<div class="option-item ${isChecked ? 'selected' : ''}" data-option="${escapeHTML(option)}">
                            <input type="${question.type === 'choix_simple' ? 'radio' : 'checkbox'}" 
                                   name="option" 
                                   value="${escapeHTML(option)}" 
                                   class="hidden" 
                                   ${isChecked ? 'checked' : ''}>
                            <span>${formatTextForDisplay(option, question.theme)}</span>
                        </div>`;
            }).join('');
        } else if (question.type === 'zone_saisie' || question.type === 'saisie_libre') {
            optionsHTML = `<input type="text" 
                                  placeholder="Votre réponse..." 
                                  value="${savedAnswer ? escapeHTML(savedAnswer[0]) : ''}" 
                                  class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-mono">`;
        }
        
        containers.options.innerHTML = optionsHTML;
        
        // Add event listeners to option items
        if (question.type === 'choix_simple') {
            document.querySelectorAll('.option-item').forEach(item => {
                item.addEventListener('click', function() {
                    document.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
                    this.classList.add('selected');
                    this.querySelector('input').checked = true;
                });
            });
        } else if (question.type === 'choix_multiple') {
            document.querySelectorAll('.option-item').forEach(item => {
                item.addEventListener('click', function() {
                    this.classList.toggle('selected');
                    this.querySelector('input').checked = !this.querySelector('input').checked;
                });
            });
        }
        
        updateNavigation();
        
        // Highlight code blocks
        if (window.Prism) {
            setTimeout(() => { Prism.highlightAll(); }, 0);
        }
    };
    
    const updateNavigation = () => {
        buttons.prev.disabled = currentQuestionIndex === 0;
        buttons.skip.style.display = (currentQuizQuestions.length - currentQuestionIndex <= skippedCount + 1) ? 'none' : 'inline-block';
        buttons.next.textContent = (currentQuestionIndex === currentQuizQuestions.length - 1) ? 'Soumettre' : 'Suivant';
        indicators.progress.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuizQuestions.length}`;
        
        // Update FAB button for mobile
        if (buttons.fabNext) {
            buttons.fabNext.innerHTML = currentQuestionIndex === currentQuizQuestions.length - 1 ? 
                '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' : 
                '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
        }
    };
    
    const saveAnswer = () => {
        const question = currentQuizQuestions[currentQuestionIndex];
        let answer;
        
        switch (question.type) {
            case 'choix_simple': 
                answer = document.querySelector('input[name="option"]:checked') ? 
                    [document.querySelector('input[name="option"]:checked').value] : []; 
                break;
            case 'choix_multiple': 
                answer = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(cb => cb.value); 
                break;
            case 'zone_saisie': 
            case 'saisie_libre': 
                const input = document.querySelector('#options-container input[type="text"]'); 
                answer = input && input.value.trim() !== '' ? [input.value.trim()] : []; 
                break;
        }
        
        if (answer && answer.length > 0) {
            userAnswers[question.id] = answer;
        } else {
            delete userAnswers[question.id];
        }
    };

    const nextQuestion = () => { 
        saveAnswer(); 
        if (currentQuestionIndex < currentQuizQuestions.length - 1) { 
            currentQuestionIndex++; 
            displayQuestion(); 
        } else { 
            showResults(); 
        } 
    };
    
    const prevQuestion = () => { 
        saveAnswer(); 
        if (currentQuestionIndex > 0) { 
            currentQuestionIndex--; 
            displayQuestion(); 
        } 
    };
    
    const skipQuestion = () => { 
        saveAnswer(); 
        currentQuizQuestions.push(currentQuizQuestions.splice(currentQuestionIndex, 1)[0]); 
        skippedCount++; 
        displayQuestion(); 
    };
    
    const startTimer = () => { 
        timerInterval = setInterval(() => { 
            secondsElapsed++; 
            const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, '0'); 
            const seconds = (secondsElapsed % 60).toString().padStart(2, '0'); 
            indicators.timer.textContent = `${minutes}:${seconds}`; 
        }, 1000); 
    };
    
    const stopTimer = () => clearInterval(timerInterval);

    const showResults = () => {
        stopTimer();
        showScreen('results');
        let score = 0;
        const themeScores = {};
        
        // Initialize theme scores
        currentQuizQuestions.forEach(q => { 
            if (!themeScores[q.theme]) themeScores[q.theme] = { correct: 0, total: 0 }; 
        });
        
        // Generate wrong answers HTML
        let wrongAnswersHTML = '';
        currentQuizQuestions.forEach(q => {
            const userAnswer = userAnswers[q.id] || [];
            const isCorrect = questionIsCorrect(q, userAnswer);
            themeScores[q.theme].total++;
            
            if (isCorrect) {
                score++;
                themeScores[q.theme].correct++;
            } else {
                wrongAnswersHTML += `<div class="wrong-answer-card">
                                        <div class="wrong-answer-question">${formatTextForDisplay(q.question, q.theme)}</div>
                                        <p class="text-red-600"><strong>Votre réponse :</strong> ${formatTextForDisplay(userAnswer.join(', ') || 'Aucune', q.theme)}</p>
                                        <p class="wrong-answer-correct"><strong>Bonne réponse :</strong> ${formatTextForDisplay(q.reponse.join(', '), q.theme)}</p>
                                        <p class="mt-2 text-gray-600"><em>${formatTextForDisplay(q.explication, q.theme)}</em></p>
                                    </div>`;
            }
        });

        // Display wrong answers
        if (wrongAnswersHTML) {
            containers.wrongAnswers.innerHTML = wrongAnswersHTML;
        } else {
            containers.wrongAnswers.innerHTML = '<p class="text-green-600 font-medium">Félicitations ! Vous avez tout bon !</p>';
        }
        
        // Display theme scores
        containers.themeScores.innerHTML = Object.entries(themeScores).map(([theme, scores]) => 
            scores.total > 0 ? 
            `<div class="theme-score-card">
                <div class="theme-name">${theme}</div>
                <div class="theme-score">${scores.correct} / ${scores.total}</div>
            </div>` : ''
        ).join('');
        
        // Display final score
        indicators.finalScore.textContent = `${score} / ${currentQuizQuestions.length}`;
        indicators.totalTime.textContent = `Terminé en ${indicators.timer.textContent}`;
        
        // Highlight code blocks in results
        if (window.Prism) {
            setTimeout(() => { Prism.highlightAll(); }, 0);
        }
    };

    /**
     * CORRECTION : Ajout de .replace(/^`|`$/g, '') pour retirer les backticks
     * des réponses correctes avant la comparaison.
     */
    const questionIsCorrect = (question, userAnswer) => {
        const correctAnswer = question.reponse;
        
        if (question.type === 'zone_saisie' || question.type === 'saisie_libre') {
            if (userAnswer.length === 0) return false;
            
            // Normalise une chaîne pour la comparaison :
            // 1. Retire les backticks ` au début/fin
            // 2. Retire tous les espaces
            // 3. Retire le point-virgule final
            // 4. Met en minuscules
            const normalize = (str) => str.replace(/^`|`$/g, '').replace(/\s/g, '').replace(/;$/, '').toLowerCase();
            
            const userClean = normalize(userAnswer[0]);
            
            // Permet plusieurs réponses correctes possibles
            return correctAnswer.some(correct => normalize(correct) === userClean);
        }
        
        if (userAnswer.length !== correctAnswer.length) return false;
        return [...userAnswer].sort().join(',') === [...correctAnswer].sort().join(',');
    };

    const resetAndShowConfig = () => { 
        populateConfigScreen(); 
        showScreen('config'); 
    };

    // === Event Listeners ===
    buttons.startConfig.addEventListener('click', () => showScreen('config'));
    buttons.startQuiz.addEventListener('click', startQuiz);
    buttons.next.addEventListener('click', nextQuestion);
    buttons.prev.addEventListener('click', prevQuestion);
    buttons.skip.addEventListener('click', skipQuestion);
    buttons.replay.addEventListener('click', resetAndShowConfig);
    buttons.quit.addEventListener('click', () => { 
        populateConfigScreen(); 
        showScreen('home'); 
    });
    
    // Add FAB button event listener for mobile
    if (buttons.fabNext) {
        buttons.fabNext.addEventListener('click', nextQuestion);
    }

    // === Initialisation ===
    loadAllQuestions();
    showScreen('home');
});
