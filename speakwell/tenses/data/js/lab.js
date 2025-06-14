
        // DOM elements
        const quizContainer = document.getElementById('quiz-container');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const actionButton = document.getElementById('action-button');
        const explanation = document.getElementById('explanation');
        const currentQuestionDisplay = document.getElementById('current-question');
        const totalQuestionsDisplay = document.getElementById('total-questions');
        const scoreDisplay = document.getElementById('score');
        const qNumber = document.getElementById('q-number');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
        const resultContainer = document.getElementById('result-container');
        const finalScoreDisplay = document.getElementById('final-score');
        const resultMessage = document.getElementById('result-message');
        const progressFill = document.getElementById('progress-fill');
        const restartButton = document.getElementById('restart-button');

        // Quiz state
        let currentQuestionIndex = 0;
        let score = 0;
        let userAnswers = Array(quizData.length).fill(null);
        let quizCompleted = false;

        // Initialize quiz
        function initQuiz() {
            totalQuestionsDisplay.textContent = quizData.length;
            loadQuestion(currentQuestionIndex);
        }

        // Load question
        function loadQuestion(index) {
            if (index < 0 || index >= quizData.length) return;

            currentQuestionIndex = index;
            const question = quizData[index];
            
            // Reset UI state
            explanation.classList.remove('show');
            actionButton.textContent = 'Fix';
            actionButton.disabled = true;
            
            // Update question info
            questionText.textContent = question.question;
            qNumber.textContent = index + 1;
            currentQuestionDisplay.textContent = index + 1;
            explanation.textContent = question.explanation;
            
            // Clear options
            optionsContainer.innerHTML = '';
            
            // Add options
            question.options.forEach((option, i) => {
                const optionElement = document.createElement('div');
                optionElement.classList.add('option');
                
                // If already answered, show correct/incorrect states
                if (userAnswers[index] !== null) {
                    if (i === userAnswers[index]) {
                        optionElement.classList.add(userAnswers[index] === question.correctAnswer ? 'correct' : 'incorrect');
                    } else if (i === question.correctAnswer) {
                        optionElement.classList.add('correct');
                    }
                    optionElement.style.cursor = 'default';
                } else {
                    optionElement.addEventListener('click', () => selectOption(i));
                }
                
                optionElement.innerHTML = `
                    <span class="option-radio"></span>
                    <span class="option-text">${option}</span>
                `;
                
                optionsContainer.appendChild(optionElement);
            });
            
            // Update action button
            if (userAnswers[index] !== null) {
                actionButton.textContent = 'Next Question';
                actionButton.disabled = false;
                explanation.classList.add('show');
            }
            
            // Update navigation buttons
            updateNavigationButtons();
        }

        // Select option
        function selectOption(optionIndex) {
            // Remove selected class from all options
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            const options = document.querySelectorAll('.option');
            options[optionIndex].classList.add('selected');
            
            // Store user's answer
            userAnswers[currentQuestionIndex] = optionIndex;
            
            // Enable Fix button
            actionButton.disabled = false;
        }

        // Submit answer
        function submitAnswer() {
            if (userAnswers[currentQuestionIndex] === null) return;
            
            const question = quizData[currentQuestionIndex];
            const selectedOption = userAnswers[currentQuestionIndex];
            const isCorrect = selectedOption === question.correctAnswer;
            
            // Update score if correct
            if (isCorrect) {
                score++;
                scoreDisplay.textContent = score;
            }
            
            // Show correct/incorrect states
            const options = document.querySelectorAll('.option');
            options.forEach((option, i) => {
                if (i === selectedOption) {
                    option.classList.add(isCorrect ? 'correct' : 'incorrect');
                } else if (i === question.correctAnswer) {
                    option.classList.add('correct');
                }
                option.style.cursor = 'default';
            });
            
            // Show explanation
            explanation.classList.add('show');
            
            // Change button to Next Question
            actionButton.textContent = 'Next Question';
        }

        // Continue to next question or show results
        function continueToNext() {
            if (currentQuestionIndex < quizData.length - 1) {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            } else {
                showResults();
            }
        }

        // Show results
        function showResults() {
            quizCompleted = true;
            
            finalScoreDisplay.textContent = `${score}/${quizData.length}`;
            progressFill.style.width = `${(score / quizData.length) * 100}%`;
            
            // Set result message based on score
            const percentage = (score / quizData.length) * 100;
            if (percentage >= 80) {
                resultMessage.textContent = "🎉 Awesome! You nailed it!.";
            } else if (percentage >= 50) {
                resultMessage.textContent = "🚀 Keep it up! Your skills are improving.";
            } else {
                resultMessage.textContent = "Keep practicing! 📚 You'll improve with more study.";
            }
            
            
            // Hide quiz and show results
            quizContainer.style.display = 'none';
            resultContainer.style.display = 'block';
        }

        // Restart quiz
        function restartQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = Array(quizData.length).fill(null);
            quizCompleted = false;
            
            scoreDisplay.textContent = '0';
            quizContainer.style.display = 'block';
            resultContainer.style.display = 'none';
            
            loadQuestion(0);
        }

        // Go to previous question
        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion(currentQuestionIndex);
            }
        }

        // Go to next question
        function nextQuestion() {
            if (currentQuestionIndex < quizData.length - 1) {
                if (userAnswers[currentQuestionIndex] === null) {
                    return;
                }
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            } else if (currentQuestionIndex === quizData.length - 1 && userAnswers[currentQuestionIndex] !== null) {
                showResults();
            }
        }

        // Update navigation buttons
        function updateNavigationButtons() {
            prevButton.disabled = currentQuestionIndex === 0;
            
            if (currentQuestionIndex === quizData.length - 1) {
                nextButton.disabled = userAnswers[currentQuestionIndex] === null;
                nextButton.textContent = "See Results";
            } else {
                nextButton.disabled = userAnswers[currentQuestionIndex] === null;
                nextButton.textContent = "Next";
            }
        }

        // Event listeners
        actionButton.addEventListener('click', () => {
            if (actionButton.textContent === 'Fix') {
                submitAnswer();
            } else {
                continueToNext();
            }
        });
        
        prevButton.addEventListener('click', prevQuestion);
        nextButton.addEventListener('click', nextQuestion);
        restartButton.addEventListener('click', restartQuiz);

        // Initialize the quiz
        initQuiz();
