

        // Éléments DOM
        const currentCard = document.getElementById('current-card');
        const questionText = document.getElementById('question-text');
        const progressFill = document.getElementById('progress-fill');
        const currentQuestionElement = document.getElementById('current-question');
        const totalQuestionsElement = document.getElementById('total-questions');
        const feedbackPopup = document.getElementById('feedback-popup');
        const feedbackTitle = document.getElementById('feedback-title');
        const feedbackMessage = document.getElementById('feedback-message');
        const correctAnswerElement = document.getElementById('correct-answer');
        const explanationElement = document.getElementById('explanation');
        const continueBtn = document.getElementById('continue-btn');
        const overlay = document.getElementById('overlay');
        const resultsScreen = document.getElementById('results-screen');
        const finalPercentage = document.getElementById('final-percentage');
        const correctCount = document.getElementById('correct-count');
        const incorrectCount = document.getElementById('incorrect-count');
        const totalScore = document.getElementById('total-score');
        const retryBtn = document.getElementById('retry-btn');
        const trueHint = document.querySelector('.swipe-hint.true');
        const falseHint = document.querySelector('.swipe-hint.false');
        const backBtn = document.getElementById('backBtn');

        // État de l'application
        let currentQuestionIndex = 0;
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        let isSwiping = false;
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        let threshold = 100; // Seuil de glissement

        // Initialiser le quiz
        function initQuiz() {
            currentQuestionIndex = 0;
            correctAnswers = 0;
            incorrectAnswers = 0;
            totalQuestionsElement.textContent = quizQuestions.length;
            loadQuestion(currentQuestionIndex);
            updateProgress();
            
            // Masquer l'écran de résultats s'il est visible
            resultsScreen.classList.remove('active');
            
            // Réinitialiser les styles de la carte
            resetCard();
        }

        // Charger une question spécifique
        function loadQuestion(index) {
            if (index >= quizQuestions.length) {
                showResults();
                return;
            }
            
            questionText.textContent = quizQuestions[index].question;
            currentQuestionElement.textContent = index + 1;
            
            // Réinitialiser la position de la carte avec animation
            resetCard();
            
            // Ajouter une animation de pulsation pour attirer l'attention
            currentCard.classList.add('pulse');
            setTimeout(() => {
                currentCard.classList.remove('pulse');
            }, 2000);
        }

        // Réinitialiser la carte à sa position d'origine
        function resetCard() {
            currentCard.style.transform = 'translateX(0) rotate(0) scale(1)';
            currentCard.style.opacity = '1';
            currentCard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        }

        // Mettre à jour la barre de progression
        function updateProgress() {
            const progress = (currentQuestionIndex / quizQuestions.length) * 100;
            progressFill.style.width = `${progress}%`;
        }

        // Afficher le popup de feedback
        function showFeedback(isCorrect, correctAnswer) {
            overlay.classList.add('active');
            feedbackPopup.classList.add('active');
            
            const currentQuestion = quizQuestions[currentQuestionIndex];
            
            if (isCorrect) {
                feedbackPopup.classList.add('correct');
                feedbackPopup.classList.remove('incorrect');
                feedbackTitle.textContent = 'Correct !';
                feedbackMessage.textContent = 'Parfait ! Vous avez trouvé la bonne réponse.';
                correctAnswerElement.textContent = `La bonne réponse est : ${correctAnswer ? 'Vrai' : 'Faux'}`;
                feedbackTitle.style.color = 'var(--success-color)';
                explanationElement.textContent = currentQuestion.explanation;
                explanationElement.style.borderLeftColor = 'var(--success-color)';
            } else {
                feedbackPopup.classList.add('incorrect');
                feedbackPopup.classList.remove('correct');
                feedbackTitle.textContent = 'Incorrect !';
                feedbackMessage.textContent = 'Permettez-moi de vous expliquer cela.';
                correctAnswerElement.textContent = `La bonne réponse est : ${correctAnswer ? 'Vrai' : 'Faux'}`;
                feedbackTitle.style.color = 'var(--error-color)';
                explanationElement.textContent = currentQuestion.explanation;
                explanationElement.style.borderLeftColor = 'var(--error-color)';
            }
        }

        // Afficher l'écran de résultats
        function showResults() {
            const totalQuestions = quizQuestions.length;
            const percentage = Math.round((correctAnswers / totalQuestions) * 100);
            
            // Mettre à jour l'écran de résultats
            finalPercentage.textContent = `${percentage}%`;
            finalPercentage.setAttribute('data-value', `${percentage}%`);
            correctCount.textContent = correctAnswers;
            incorrectCount.textContent = incorrectAnswers;
            totalScore.textContent = `${correctAnswers}/${totalQuestions}`;
            
            // Afficher des confettis si score parfait
            if (correctAnswers === totalQuestions) {
                createConfetti();
            }
            
            // Afficher l'écran de résultats
            setTimeout(() => {
                resultsScreen.classList.add('active');
            }, 500);
        }

        // Créer une animation de confettis pour un score parfait
        function createConfetti() {
            const colors = ['#ff4081', '#3f51b5', '#009688', '#ff9800', '#e91e63', '#2196f3', '#4caf50'];
            
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = (Math.random() * 10 + 5) + 'px';
                confetti.style.height = (Math.random() * 10 + 5) + 'px';
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
                confetti.style.animationDelay = Math.random() * 3 + 's';
                
                document.body.appendChild(confetti);
                
                // Supprimer les confettis après l'animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

        // Gérer le glissement
        function handleSwipe(isRightSwipe) {
            if (isSwiping) return;
            isSwiping = true;
            
            const currentQuestion = quizQuestions[currentQuestionIndex];
            const userAnswer = isRightSwipe; // Glissement vers la droite = vrai, vers la gauche = faux
            const isCorrect = userAnswer === currentQuestion.answer;
            
            // Mettre à jour le score
            if (isCorrect) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
            
            // Supprimer la transition pour un glissement fluide
            currentCard.style.transition = 'none';
            
            // Animer la carte en fonction de la direction du glissement
            requestAnimationFrame(() => {
                const translateAmount = window.innerWidth * 0.8;
                currentCard.style.transform = isRightSwipe ? 
                    `translateX(${translateAmount}px) rotate(25deg) scale(0.9)` : 
                    `translateX(-${translateAmount}px) rotate(-25deg) scale(0.9)`;
                currentCard.style.opacity = '0';
                
                // Afficher le feedback après l'animation
                setTimeout(() => {
                    showFeedback(isCorrect, currentQuestion.answer);
                }, 300);
            });
        }

        // Passer à la question suivante
        function nextQuestion() {
            feedbackPopup.classList.remove('active');
            overlay.classList.remove('active');
            
            currentQuestionIndex++;
            updateProgress();
            
            setTimeout(() => {
                loadQuestion(currentQuestionIndex);
                isSwiping = false;
            }, 300);
        }

        // Réinitialiser les indices
        function resetHints() {
            trueHint.classList.remove('active');
            falseHint.classList.remove('active');
        }

        // Événements tactiles pour mobile
        currentCard.addEventListener('touchstart', (e) => {
            if (isSwiping) return;
            e.preventDefault();
            isDragging = true;
            startX = e.touches[0].clientX;
            currentCard.style.transition = 'none';
        }, { passive: false });

        currentCard.addEventListener('touchmove', (e) => {
            if (!isDragging || isSwiping) return;
            e.preventDefault();
            currentX = e.touches[0].clientX;
            const diff = currentX - startX;
            
            // Autoriser le glissement uniquement si déplacé de plus de 5px
            if (Math.abs(diff) > 5) {
                // Mettre à jour l'opacité de l'indice en fonction de la direction du glissement
                if (diff > 0) {
                    trueHint.classList.add('active');
                    falseHint.classList.remove('active');
                } else {
                    falseHint.classList.add('active');
                    trueHint.classList.remove('active');
                }
                
                // Appliquer la transformation
                currentCard.style.transform = `translateX(${diff}px) rotate(${diff * 0.06}deg)`;
                currentCard.style.opacity = 1 - Math.abs(diff) / (window.innerWidth * 0.4);
            }
        }, { passive: false });

        currentCard.addEventListener('touchend', (e) => {
            if (!isDragging || isSwiping) {
                isDragging = false;
                resetHints();
                return;
            }
            
            const diff = currentX - startX;
            
            if (Math.abs(diff) > threshold) {
                handleSwipe(diff > 0); // Glissement vers la droite si positif, vers la gauche si négatif
            } else {
                // Réinitialiser la position de la carte si pas assez glissée
                resetCard();
                resetHints();
            }
            
            isDragging = false;
        });

        currentCard.addEventListener('touchcancel', () => {
            isDragging = false;
            resetCard();
            resetHints();
        });

        // Événements souris pour bureau
        let isMouseDown = false;
        let mouseStartX = 0;
        let mouseCurrentX = 0;

        currentCard.addEventListener('mousedown', (e) => {
            if (isSwiping) return;
            isMouseDown = true;
            mouseStartX = e.clientX;
            currentCard.style.cursor = 'grabbing';
            currentCard.style.transition = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isMouseDown || isSwiping) return;
            mouseCurrentX = e.clientX;
            const diff = mouseCurrentX - mouseStartX;
            
            if (Math.abs(diff) > 5) {
                // Mettre à jour l'opacité de l'indice en fonction de la direction du glissement
                if (diff > 0) {
                    trueHint.classList.add('active');
                    falseHint.classList.remove('active');
                } else {
                    falseHint.classList.add('active');
                    trueHint.classList.remove('active');
                }
                
                // Appliquer la transformation
                currentCard.style.transform = `translateX(${diff}px) rotate(${diff * 0.06}deg)`;
                currentCard.style.opacity = 1 - Math.abs(diff) / 500;
            }
        });

        document.addEventListener('mouseup', () => {
            if (!isMouseDown || isSwiping) {
                isMouseDown = false;
                currentCard.style.cursor = 'grab';
                resetHints();
                return;
            }
            
            const diff = mouseCurrentX - mouseStartX;
            
            if (Math.abs(diff) > threshold) {
                handleSwipe(diff > 0);
            } else {
                resetCard();
                resetHints();
            }
            
            isMouseDown = false;
            currentCard.style.cursor = 'grab';
        });

        // Écouteurs d'événements
        continueBtn.addEventListener('click', nextQuestion);

        retryBtn.addEventListener('click', () => {
            resultsScreen.classList.remove('active');
            setTimeout(initQuiz, 300);
        });

        // Fonctionnalité du bouton retour
        backBtn.addEventListener('click', () => {
            if (confirm('Êtes-vous sûr de vouloir revenir en arrière ? Votre progression sera perdue.')) {
                window.history.back();
            }
        });

        // Empêcher la sélection de texte pendant le glissement
        currentCard.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        // Ajouter le support du clavier
        document.addEventListener('keydown', (e) => {
            if (isSwiping) return;
            
            if (e.key === 'ArrowRight') {
                handleSwipe(true);
            } else if (e.key === 'ArrowLeft') {
                handleSwipe(false);
            }
        });

        // Ajuster le seuil en fonction de la taille de l'écran
        function adjustThreshold() {
            threshold = Math.min(100, window.innerWidth * 0.2);
        }

        // Initialiser le quiz au chargement de la page
        window.addEventListener('DOMContentLoaded', () => {
            initQuiz();
            adjustThreshold();
        });

        // Ajuster pour le redimensionnement de la fenêtre
        window.addEventListener('resize', adjustThreshold);
