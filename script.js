// Hiragana character data with romaji translations
const hiraganaData = [
    // Basic hiragana characters (あ-わ)
    { hiragana: 'あ', romaji: 'a' },
    { hiragana: 'い', romaji: 'i' },
    { hiragana: 'う', romaji: 'u' },
    { hiragana: 'え', romaji: 'e' },
    { hiragana: 'お', romaji: 'o' },
    { hiragana: 'か', romaji: 'ka' },
    { hiragana: 'き', romaji: 'ki' },
    { hiragana: 'く', romaji: 'ku' },
    { hiragana: 'け', romaji: 'ke' },
    { hiragana: 'こ', romaji: 'ko' },
    { hiragana: 'さ', romaji: 'sa' },
    { hiragana: 'し', romaji: 'shi' },
    { hiragana: 'す', romaji: 'su' },
    { hiragana: 'せ', romaji: 'se' },
    { hiragana: 'そ', romaji: 'so' },
    { hiragana: 'た', romaji: 'ta' },
    { hiragana: 'ち', romaji: 'chi' },
    { hiragana: 'つ', romaji: 'tsu' },
    { hiragana: 'て', romaji: 'te' },
    { hiragana: 'と', romaji: 'to' },
    { hiragana: 'な', romaji: 'na' },
    { hiragana: 'に', romaji: 'ni' },
    { hiragana: 'ぬ', romaji: 'nu' },
    { hiragana: 'ね', romaji: 'ne' },
    { hiragana: 'の', romaji: 'no' },
    { hiragana: 'は', romaji: 'ha' },
    { hiragana: 'ひ', romaji: 'hi' },
    { hiragana: 'ふ', romaji: 'fu' },
    { hiragana: 'へ', romaji: 'he' },
    { hiragana: 'ほ', romaji: 'ho' },
    { hiragana: 'ま', romaji: 'ma' },
    { hiragana: 'み', romaji: 'mi' },
    { hiragana: 'む', romaji: 'mu' },
    { hiragana: 'め', romaji: 'me' },
    { hiragana: 'も', romaji: 'mo' },
    { hiragana: 'や', romaji: 'ya' },
    { hiragana: 'ゆ', romaji: 'yu' },
    { hiragana: 'よ', romaji: 'yo' },
    { hiragana: 'ら', romaji: 'ra' },
    { hiragana: 'り', romaji: 'ri' },
    { hiragana: 'る', romaji: 'ru' },
    { hiragana: 'れ', romaji: 're' },
    { hiragana: 'ろ', romaji: 'ro' },
    { hiragana: 'わ', romaji: 'wa' },
    { hiragana: 'ん', romaji: 'n' }
];

class HiraganaQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.questions = [];
        this.incorrectAnswers = [];
        this.isQuizStarted = false;
        this.feedbackElement = null;
        
        this.initializeElements();
        this.bindEvents();
        this.generateQuestions();
    }
    
    initializeElements() {
        this.elements = {
            hiraganaDisplay: document.getElementById('hiragana-display'),
            romajiInput: document.getElementById('romaji-input'),
            submitBtn: document.getElementById('submit-btn'),
            startBtn: document.getElementById('start-btn'),
            nextBtn: document.getElementById('next-btn'),
            finishBtn: document.getElementById('finish-btn'),
            restartBtn: document.getElementById('restart-btn'),
            currentScore: document.getElementById('current-score'),
            totalQuestions: document.getElementById('total-questions'),
            percentage: document.getElementById('percentage'),
            finalScore: document.getElementById('final-score'),
            finalTotal: document.getElementById('final-total'),
            finalPercentage: document.getElementById('final-percentage'),
            resultsSection: document.getElementById('results-section'),
            incorrectAnswers: document.getElementById('incorrect-answers'),
            incorrectList: document.getElementById('incorrect-list'),
            progressFill: document.getElementById('progress-fill'),
            questionCard: document.querySelector('.question-card')
        };
    }
    
    bindEvents() {
        this.elements.startBtn.addEventListener('click', () => this.startQuiz());
        this.elements.submitBtn.addEventListener('click', () => this.submitAnswer());
        this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.elements.finishBtn.addEventListener('click', () => this.finishQuiz());
        this.elements.restartBtn.addEventListener('click', () => this.restartQuiz());
        
        // Enter key support for input
        this.elements.romajiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                if (this.elements.submitBtn.style.display !== 'none') {
                    this.submitAnswer();
                } else if (this.elements.nextBtn.style.display !== 'none') {
                    this.nextQuestion();
                } else if (this.elements.finishBtn.style.display !== 'none') {
                    this.finishQuiz();
                }
            }
        });
    }
    
    generateQuestions() {
        // Shuffle the hiragana data to create random questions
        this.questions = [...hiraganaData].sort(() => Math.random() - 0.5);
        this.elements.totalQuestions.textContent = this.questions.length;
    }
    
    startQuiz() {
        this.isQuizStarted = true;
        this.currentQuestion = 0;
        this.score = 0;
        this.incorrectAnswers = [];
        
        // Add quiz-started class for styling
        document.querySelector('.quiz-section').classList.add('quiz-started');
        
        // Hide start button and show quiz elements
        this.elements.startBtn.style.display = 'none';
        this.elements.submitBtn.style.display = 'inline-block';
        this.elements.romajiInput.style.display = 'inline-block';
        this.elements.resultsSection.style.display = 'none';
        
        this.showQuestion();
        this.updateScore();
        this.elements.romajiInput.focus();
    }
    
    showQuestion() {
        if (this.currentQuestion < this.questions.length) {
            const question = this.questions[this.currentQuestion];
            this.elements.hiraganaDisplay.textContent = question.hiragana;
            this.elements.romajiInput.value = '';
            this.elements.romajiInput.disabled = false;
            this.removeFeedback();
            this.updateProgress();
        }
    }
    
    submitAnswer() {
        const userAnswer = this.elements.romajiInput.value.trim().toLowerCase();
        const correctAnswer = this.questions[this.currentQuestion].romaji.toLowerCase();
        
        if (userAnswer === '') {
            this.showFeedback('Please enter an answer!', 'incorrect');
            return;
        }
        
        const isCorrect = userAnswer === correctAnswer;
        
        if (isCorrect) {
            this.score++;
            this.showFeedback('Correct! 🎉', 'correct');
        } else {
            this.incorrectAnswers.push({
                hiragana: this.questions[this.currentQuestion].hiragana,
                correctRomaji: this.questions[this.currentQuestion].romaji,
                userAnswer: userAnswer
            });
            this.showFeedback(`Incorrect. The correct answer is "${correctAnswer}"`, 'incorrect');
        }
        
        this.elements.romajiInput.disabled = true;
        this.elements.submitBtn.style.display = 'none';
        
        // Show appropriate next button
        if (this.currentQuestion < this.questions.length - 1) {
            this.elements.nextBtn.style.display = 'inline-block';
        } else {
            this.elements.finishBtn.style.display = 'inline-block';
        }
        
        this.updateScore();
    }
    
    nextQuestion() {
        this.currentQuestion++;
        this.elements.nextBtn.style.display = 'none';
        this.elements.submitBtn.style.display = 'inline-block';
        this.showQuestion();
        this.elements.romajiInput.focus();
    }
    
    finishQuiz() {
        this.showResults();
    }
    
    showResults() {
        // Hide quiz section elements
        document.querySelector('.quiz-section').style.display = 'none';
        
        // Show results
        this.elements.resultsSection.style.display = 'block';
        
        // Update final scores
        const percentage = Math.round((this.score / this.questions.length) * 100);
        this.elements.finalScore.textContent = this.score;
        this.elements.finalTotal.textContent = this.questions.length;
        this.elements.finalPercentage.textContent = percentage;
        
        // Show incorrect answers if any
        if (this.incorrectAnswers.length > 0) {
            this.elements.incorrectAnswers.style.display = 'block';
            this.displayIncorrectAnswers();
        } else {
            this.elements.incorrectAnswers.style.display = 'none';
        }
        
        this.updateProgress();
    }
    
    displayIncorrectAnswers() {
        this.elements.incorrectList.innerHTML = '';
        
        this.incorrectAnswers.forEach(item => {
            const incorrectDiv = document.createElement('div');
            incorrectDiv.className = 'incorrect-item';
            
            incorrectDiv.innerHTML = `
                <div class="incorrect-hiragana">${item.hiragana}</div>
                <div class="incorrect-romaji">${item.correctRomaji}</div>
            `;
            
            this.elements.incorrectList.appendChild(incorrectDiv);
        });
    }
    
    restartQuiz() {
        // Reset quiz state
        this.isQuizStarted = false;
        this.currentQuestion = 0;
        this.score = 0;
        this.incorrectAnswers = [];
        
        // Generate new questions
        this.generateQuestions();
        
        // Remove quiz-started class for main menu styling
        document.querySelector('.quiz-section').classList.remove('quiz-started');
        
        // Reset UI
        document.querySelector('.quiz-section').style.display = 'block';
        this.elements.resultsSection.style.display = 'none';
        this.elements.startBtn.style.display = 'inline-block';
        this.elements.submitBtn.style.display = 'none';
        this.elements.nextBtn.style.display = 'none';
        this.elements.finishBtn.style.display = 'none';
        this.elements.romajiInput.style.display = 'inline-block';
        this.elements.romajiInput.disabled = false;
        this.elements.hiraganaDisplay.textContent = 'あ';
        this.elements.romajiInput.value = '';
        
        this.updateScore();
        this.updateProgress();
        this.removeFeedback();
    }
    
    updateScore() {
        this.elements.currentScore.textContent = this.score;
        const percentage = this.questions.length > 0 ? 
            Math.round((this.score / Math.max(this.currentQuestion, 1)) * 100) : 0;
        this.elements.percentage.textContent = percentage;
    }
    
    updateProgress() {
        const progress = this.questions.length > 0 ? 
            (this.currentQuestion / this.questions.length) * 100 : 0;
        this.elements.progressFill.style.width = `${progress}%`;
    }
    
    showFeedback(message, type) {
        this.removeFeedback();
        
        this.feedbackElement = document.createElement('div');
        this.feedbackElement.className = `feedback ${type}`;
        this.feedbackElement.textContent = message;
        
        // Insert feedback after the input section
        const inputSection = document.querySelector('.input-section');
        inputSection.parentNode.insertBefore(this.feedbackElement, inputSection.nextSibling);
    }
    
    removeFeedback() {
        if (this.feedbackElement) {
            this.feedbackElement.remove();
            this.feedbackElement = null;
        }
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new HiraganaQuiz();
});