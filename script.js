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

// Katakana character data with romaji translations
const katakanaData = [
    // Basic katakana characters (ア-ワ)
    { katakana: 'ア', romaji: 'a' },
    { katakana: 'イ', romaji: 'i' },
    { katakana: 'ウ', romaji: 'u' },
    { katakana: 'エ', romaji: 'e' },
    { katakana: 'オ', romaji: 'o' },
    { katakana: 'カ', romaji: 'ka' },
    { katakana: 'キ', romaji: 'ki' },
    { katakana: 'ク', romaji: 'ku' },
    { katakana: 'ケ', romaji: 'ke' },
    { katakana: 'コ', romaji: 'ko' },
    { katakana: 'サ', romaji: 'sa' },
    { katakana: 'シ', romaji: 'shi' },
    { katakana: 'ス', romaji: 'su' },
    { katakana: 'セ', romaji: 'se' },
    { katakana: 'ソ', romaji: 'so' },
    { katakana: 'タ', romaji: 'ta' },
    { katakana: 'チ', romaji: 'chi' },
    { katakana: 'ツ', romaji: 'tsu' },
    { katakana: 'テ', romaji: 'te' },
    { katakana: 'ト', romaji: 'to' },
    { katakana: 'ナ', romaji: 'na' },
    { katakana: 'ニ', romaji: 'ni' },
    { katakana: 'ヌ', romaji: 'nu' },
    { katakana: 'ネ', romaji: 'ne' },
    { katakana: 'ノ', romaji: 'no' },
    { katakana: 'ハ', romaji: 'ha' },
    { katakana: 'ヒ', romaji: 'hi' },
    { katakana: 'フ', romaji: 'fu' },
    { katakana: 'ヘ', romaji: 'he' },
    { katakana: 'ホ', romaji: 'ho' },
    { katakana: 'マ', romaji: 'ma' },
    { katakana: 'ミ', romaji: 'mi' },
    { katakana: 'ム', romaji: 'mu' },
    { katakana: 'メ', romaji: 'me' },
    { katakana: 'モ', romaji: 'mo' },
    { katakana: 'ヤ', romaji: 'ya' },
    { katakana: 'ユ', romaji: 'yu' },
    { katakana: 'ヨ', romaji: 'yo' },
    { katakana: 'ラ', romaji: 'ra' },
    { katakana: 'リ', romaji: 'ri' },
    { katakana: 'ル', romaji: 'ru' },
    { katakana: 'レ', romaji: 're' },
    { katakana: 'ロ', romaji: 'ro' },
    { katakana: 'ワ', romaji: 'wa' },
    { katakana: 'ン', romaji: 'n' }
];

class KanaQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.questions = [];
        this.incorrectAnswers = [];
        this.isQuizStarted = false;
        this.feedbackElement = null;
        this.currentMode = null; // 'hiragana' or 'katakana'
        this.currentView = 'main'; // 'main', 'study', 'quiz'
        
        this.initializeElements();
        this.bindEvents();
        this.showMainMenu();
    }
    
    initializeElements() {
        this.elements = {
            // Main navigation elements
            mainTitle: document.getElementById('main-title'),
            subtitle: document.getElementById('subtitle'),
            modeSelection: document.getElementById('mode-selection'),
            hiraganaBtn: document.getElementById('hiragana-mode-btn'),
            katakanaBtn: document.getElementById('katakana-mode-btn'),
            studyBtn: document.getElementById('study-btn'),
            backToMainBtn: document.getElementById('back-to-main'),
            
            // Study/Lessons elements
            lessonsSection: document.getElementById('lessons-section'),
            lessonsTitle: document.getElementById('lessons-title'),
            lessonsSubtitle: document.getElementById('lessons-subtitle'),
            charactersGrid: document.getElementById('characters-grid'),
            
            // Quiz elements
            quizSection: document.getElementById('quiz-section'),
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
        // Mode selection events
        this.elements.hiraganaBtn.addEventListener('click', () => this.selectMode('hiragana'));
        this.elements.katakanaBtn.addEventListener('click', () => this.selectMode('katakana'));
        this.elements.studyBtn.addEventListener('click', () => this.showStudyMode());
        this.elements.backToMainBtn.addEventListener('click', () => this.showMainMenu());
        
        // Quiz events
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
        // Use current mode data to generate questions
        const currentData = this.currentMode === 'katakana' ? katakanaData : hiraganaData;
        this.questions = [...currentData].sort(() => Math.random() - 0.5);
        this.elements.totalQuestions.textContent = this.questions.length;
    }
    
    selectMode(mode) {
        this.currentMode = mode;
        this.generateQuestions();
        this.updateUIForMode();
        this.showQuizMenu();
    }
    
    updateUIForMode() {
        const modeTitle = this.currentMode === 'katakana' ? 'Katakana' : 'Hiragana';
        const modeChar = this.currentMode === 'katakana' ? 'ア' : 'あ';
        
        this.elements.mainTitle.textContent = `🏮 ${modeTitle} Quiz`;
        this.elements.subtitle.textContent = `Test your knowledge of Japanese ${modeTitle} characters!`;
        this.elements.lessonsTitle.textContent = `Study ${modeTitle} Characters`;
        this.elements.lessonsSubtitle.textContent = `Review all ${modeTitle.toLowerCase()} characters before taking the quiz`;
        
        // Update the character display with the first character of selected mode
        this.elements.hiraganaDisplay.textContent = modeChar;
    }
    
    showMainMenu() {
        this.currentView = 'main';
        this.currentMode = null;
        
        // Reset title and subtitle
        this.elements.mainTitle.textContent = '🏮 Kana Quiz';
        this.elements.subtitle.textContent = 'Choose your learning mode!';
        
        // Show/hide appropriate sections
        this.elements.modeSelection.style.display = 'block';
        this.elements.lessonsSection.style.display = 'none';
        this.elements.quizSection.style.display = 'none';
        this.elements.backToMainBtn.style.display = 'none';
        this.elements.studyBtn.style.display = 'inline-block';
    }
    
    showQuizMenu() {
        this.currentView = 'quiz-menu';
        
        // Show quiz section in menu state
        this.elements.modeSelection.style.display = 'none';
        this.elements.lessonsSection.style.display = 'none';
        this.elements.quizSection.style.display = 'block';
        this.elements.backToMainBtn.style.display = 'inline-block';
        
        // Reset quiz state
        this.isQuizStarted = false;
        this.elements.quizSection.classList.remove('quiz-started');
        this.initializeQuizMenu();
    }
    
    showStudyMode() {
        if (!this.currentMode) {
            // If no mode selected, show main menu
            this.showMainMenu();
            return;
        }
        
        this.currentView = 'study';
        
        // Show lessons section
        this.elements.modeSelection.style.display = 'none';
        this.elements.lessonsSection.style.display = 'block';
        this.elements.quizSection.style.display = 'none';
        this.elements.backToMainBtn.style.display = 'inline-block';
        
        this.populateCharactersGrid();
    }
    
    populateCharactersGrid() {
        const currentData = this.currentMode === 'katakana' ? katakanaData : hiraganaData;
        const charKey = this.currentMode === 'katakana' ? 'katakana' : 'hiragana';
        
        this.elements.charactersGrid.innerHTML = '';
        
        currentData.forEach(item => {
            const charCard = document.createElement('div');
            charCard.className = 'character-card';
            
            charCard.innerHTML = `
                <div class="character-display">${item[charKey]}</div>
                <div class="character-romaji">${item.romaji}</div>
            `;
            
            this.elements.charactersGrid.appendChild(charCard);
        });
    }
    
    initializeQuizMenu() {
        // Hide quiz elements in quiz menu state
        this.elements.submitBtn.style.display = 'none';
        this.elements.romajiInput.style.display = 'none';
        this.elements.nextBtn.style.display = 'none';
        this.elements.finishBtn.style.display = 'none';
        this.elements.startBtn.style.display = 'inline-block';
        this.elements.resultsSection.style.display = 'none';
        document.querySelector('.score-display').style.display = 'none';
        document.querySelector('.question-card').style.display = 'none';
    }
    
    startQuiz() {
        this.isQuizStarted = true;
        this.currentQuestion = 0;
        this.score = 0;
        this.incorrectAnswers = [];
        
        // Add quiz-started class for styling
        document.querySelector('.quiz-section').classList.add('quiz-started');
        
        // Show quiz elements and hide start button
        this.elements.startBtn.style.display = 'none';
        this.elements.submitBtn.style.display = 'inline-block';
        this.elements.romajiInput.style.display = 'inline-block';
        this.elements.resultsSection.style.display = 'none';
        
        // Show score display and question card
        document.querySelector('.score-display').style.display = 'flex';
        document.querySelector('.question-card').style.display = 'block';
        
        this.showQuestion();
        this.updateScore();
        this.elements.romajiInput.focus();
    }
    
    showQuestion() {
        if (this.currentQuestion < this.questions.length) {
            const question = this.questions[this.currentQuestion];
            const charKey = this.currentMode === 'katakana' ? 'katakana' : 'hiragana';
            this.elements.hiraganaDisplay.textContent = question[charKey];
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
            const charKey = this.currentMode === 'katakana' ? 'katakana' : 'hiragana';
            this.incorrectAnswers.push({
                character: this.questions[this.currentQuestion][charKey],
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
                <div class="incorrect-character">${item.character}</div>
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
        
        // Go back to quiz menu state
        this.showQuizMenu();
        
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
    new KanaQuiz();
});
