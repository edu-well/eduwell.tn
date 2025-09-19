
        // DOM Elements
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

        // App State
        let currentQuestionIndex = 0;
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        let isSwiping = false;
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        let threshold = 100; // Swipe threshold

        // Initialize the quiz
        function initQuiz() {
            currentQuestionIndex = 0;
            correctAnswers = 0;
            incorrectAnswers = 0;
            totalQuestionsElement.textContent = quizQuestions.length;
            loadQuestion(currentQuestionIndex);
            updateProgress();
            
            // Hide results screen if it's visible
            resultsScreen.classList.remove('active');
            
            // Reset card styles
            resetCard();
        }

        // Load a specific question
        function loadQuestion(index) {
            if (index >= quizQuestions.length) {
                showResults();
                return;
            }
            
            questionText.textContent = quizQuestions[index].question;
            currentQuestionElement.textContent = index + 1;
            
            // Reset card position with animation
            resetCard();
            
            // Add pulse animation to draw attention
            currentCard.classList.add('pulse');
            setTimeout(() => {
                currentCard.classList.remove('pulse');
            }, 2000);
        }

        // Reset card to original position
        function resetCard() {
            currentCard.style.transform = 'translateX(0) rotate(0) scale(1)';
            currentCard.style.opacity = '1';
            currentCard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        }

        // Update progress bar
        function updateProgress() {
            const progress = (currentQuestionIndex / quizQuestions.length) * 100;
            progressFill.style.width = `${progress}%`;
        }

        // Show feedback popup
        function showFeedback(isCorrect, correctAnswer) {
            overlay.classList.add('active');
            feedbackPopup.classList.add('active');
            
            const currentQuestion = quizQuestions[currentQuestionIndex];
            
            if (isCorrect) {
                feedbackPopup.classList.add('Exact');
                feedbackPopup.classList.remove('Faux');
                feedbackTitle.textContent = 'Correct!';
                feedbackMessage.textContent = 'C’est juste !';
                correctAnswerElement.textContent = `La bonne réponse est: ${correctAnswer ? 'Exact' : 'Faux'}`;
                feedbackTitle.style.color = 'var(--success-color)';
                explanationElement.textContent = currentQuestion.explanation;
                explanationElement.style.borderLeftColor = 'var(--success-color)';
            } else {
                feedbackPopup.classList.add('incorrect');
                feedbackPopup.classList.remove('correct');
                feedbackTitle.textContent = 'Mauvaise réponse';
                feedbackMessage.textContent = 'Laisse-moi t’expliquer .';
                correctAnswerElement.textContent = `La bonne réponse est: ${correctAnswer ? 'Exact' : 'Faux'}`;
                feedbackTitle.style.color = 'var(--error-color)';
                explanationElement.textContent = currentQuestion.explanation;
                explanationElement.style.borderLeftColor = 'var(--error-color)';
            }
        }

        // Show results screen
        function showResults() {
            const totalQuestions = quizQuestions.length;
            const percentage = Math.round((correctAnswers / totalQuestions) * 100);
            
            // Update results screen
            finalPercentage.textContent = `${percentage}%`;
            finalPercentage.setAttribute('data-value', `${percentage}%`);
            correctCount.textContent = correctAnswers;
            incorrectCount.textContent = incorrectAnswers;
            totalScore.textContent = `${correctAnswers}/${totalQuestions}`;
            
            // Show confetti if perfect score
            if (correctAnswers === totalQuestions) {
                createConfetti();
            }
            
            // Show results screen
            setTimeout(() => {
                resultsScreen.classList.add('active');
            }, 500);
        }

        // Create confetti animation for perfect score
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
                
                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

        // Handle swipe
        function handleSwipe(isRightSwipe) {
            if (isSwiping) return;
            isSwiping = true;
            
            const currentQuestion = quizQuestions[currentQuestionIndex];
            const userAnswer = isRightSwipe; // Right swipe = true, Left swipe = false
            const isCorrect = userAnswer === currentQuestion.answer;
            
            // Update score
            if (isCorrect) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
            
            // Remove transition for smooth swipe
            currentCard.style.transition = 'none';
            
            // Animate card based on swipe direction
            requestAnimationFrame(() => {
                const translateAmount = window.innerWidth * 0.8;
                currentCard.style.transform = isRightSwipe ? 
                    `translateX(${translateAmount}px) rotate(25deg) scale(0.9)` : 
                    `translateX(-${translateAmount}px) rotate(-25deg) scale(0.9)`;
                currentCard.style.opacity = '0';
                
                // Show feedback after animation
                setTimeout(() => {
                    showFeedback(isCorrect, currentQuestion.answer);
                }, 300);
            });
        }

        // Continue to next question
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

        // Reset hints
        function resetHints() {
            trueHint.classList.remove('active');
            falseHint.classList.remove('active');
        }

        // Touch Events for Mobile
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
            
            // Only allow swiping if moved more than 5px
            if (Math.abs(diff) > 5) {
                // Update hint opacity based on swipe direction
                if (diff > 0) {
                    trueHint.classList.add('active');
                    falseHint.classList.remove('active');
                } else {
                    falseHint.classList.add('active');
                    trueHint.classList.remove('active');
                }
                
                // Apply transform
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
                handleSwipe(diff > 0); // Right swipe if positive, left if negative
            } else {
                // Reset card position if not swiped far enough
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

        // Mouse Events for Desktop
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
                // Update hint opacity based on swipe direction
                if (diff > 0) {
                    trueHint.classList.add('active');
                    falseHint.classList.remove('active');
                } else {
                    falseHint.classList.add('active');
                    trueHint.classList.remove('active');
                }
                
                // Apply transform
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

        // Event Listeners
        continueBtn.addEventListener('click', nextQuestion);

        retryBtn.addEventListener('click', () => {
            resultsScreen.classList.remove('active');
            setTimeout(initQuiz, 300);
        });

        // Back button functionality
        backBtn.addEventListener('click', () => {
            if (confirm('Es-tu sûr(e) de vouloir revenir en arrière ? Tes progrès seront perdus')) {
                window.history.back();
            }
        });

        // Prevent text selection during drag
        currentCard.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        // Add keyboard support
        document.addEventListener('keydown', (e) => {
            if (isSwiping) return;
            
            if (e.key === 'ArrowRight') {
                handleSwipe(true);
            } else if (e.key === 'ArrowLeft') {
                handleSwipe(false);
            }
        });

        // Adjust threshold based on screen size
        function adjustThreshold() {
            threshold = Math.min(100, window.innerWidth * 0.2);
        }

        // Initialize the quiz when page loads
        window.addEventListener('DOMContentLoaded', () => {
            initQuiz();
            adjustThreshold();
        });

        // Adjust for window resize
        window.addEventListener('resize', adjustThreshold);
