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

// Japanese vocabulary data with all four formats
const vocabularyData = [
    // Basic Greetings
    { romaji: 'ohayou', hiragana: 'おはよう', katakana: 'オハヨウ', english: 'good morning (casual)', category: 'greetings' },
    { romaji: 'ohayou gozaimasu', hiragana: 'おはようございます', katakana: 'オハヨウゴザイマス', english: 'good morning (polite)', category: 'greetings' },
    { romaji: 'konnichiwa', hiragana: 'こんにちは', katakana: 'コンニチハ', english: 'hello/good afternoon', category: 'greetings' },
    { romaji: 'konbanwa', hiragana: 'こんばんは', katakana: 'コンバンハ', english: 'good evening', category: 'greetings' },
    { romaji: 'sayonara', hiragana: 'さようなら', katakana: 'サヨウナラ', english: 'goodbye', category: 'greetings' },
    { romaji: 'arigatou', hiragana: 'ありがとう', katakana: 'アリガトウ', english: 'thank you (casual)', category: 'greetings' },
    { romaji: 'arigatou gozaimasu', hiragana: 'ありがとうございます', katakana: 'アリガトウゴザイマス', english: 'thank you (polite)', category: 'greetings' },
    { romaji: 'sumimasen', hiragana: 'すみません', katakana: 'スミマセン', english: 'excuse me/sorry', category: 'greetings' },
    
    // Family
    { romaji: 'kazoku', hiragana: 'かぞく', katakana: 'カゾク', english: 'family', category: 'family' },
    { romaji: 'chichi', hiragana: 'ちち', katakana: 'チチ', english: 'father (own)', category: 'family' },
    { romaji: 'haha', hiragana: 'はは', katakana: 'ハハ', english: 'mother (own)', category: 'family' },
    { romaji: 'ani', hiragana: 'あに', katakana: 'アニ', english: 'older brother (own)', category: 'family' },
    { romaji: 'ane', hiragana: 'あね', katakana: 'アネ', english: 'older sister (own)', category: 'family' },
    { romaji: 'otouto', hiragana: 'おとうと', katakana: 'オトウト', english: 'younger brother', category: 'family' },
    { romaji: 'imouto', hiragana: 'いもうと', katakana: 'イモウト', english: 'younger sister', category: 'family' },
    
    // Numbers
    { romaji: 'ichi', hiragana: 'いち', katakana: 'イチ', english: 'one', category: 'numbers' },
    { romaji: 'ni', hiragana: 'に', katakana: 'ニ', english: 'two', category: 'numbers' },
    { romaji: 'san', hiragana: 'さん', katakana: 'サン', english: 'three', category: 'numbers' },
    { romaji: 'shi/yon', hiragana: 'し/よん', katakana: 'シ/ヨン', english: 'four', category: 'numbers' },
    { romaji: 'go', hiragana: 'ご', katakana: 'ゴ', english: 'five', category: 'numbers' },
    { romaji: 'roku', hiragana: 'ろく', katakana: 'ロク', english: 'six', category: 'numbers' },
    { romaji: 'shichi/nana', hiragana: 'しち/なな', katakana: 'シチ/ナナ', english: 'seven', category: 'numbers' },
    { romaji: 'hachi', hiragana: 'はち', katakana: 'ハチ', english: 'eight', category: 'numbers' },
    { romaji: 'kyuu/ku', hiragana: 'きゅう/く', katakana: 'キュウ/ク', english: 'nine', category: 'numbers' },
    { romaji: 'juu', hiragana: 'じゅう', katakana: 'ジュウ', english: 'ten', category: 'numbers' },
    
    // Colors
    { romaji: 'aka', hiragana: 'あか', katakana: 'アカ', english: 'red', category: 'colors' },
    { romaji: 'ao', hiragana: 'あお', katakana: 'アオ', english: 'blue', category: 'colors' },
    { romaji: 'ki', hiragana: 'き', katakana: 'キ', english: 'yellow', category: 'colors' },
    { romaji: 'midori', hiragana: 'みどり', katakana: 'ミドリ', english: 'green', category: 'colors' },
    { romaji: 'shiro', hiragana: 'しろ', katakana: 'シロ', english: 'white', category: 'colors' },
    { romaji: 'kuro', hiragana: 'くろ', katakana: 'クロ', english: 'black', category: 'colors' },
    
    // Food
    { romaji: 'gohan', hiragana: 'ごはん', katakana: 'ゴハン', english: 'rice/meal', category: 'food' },
    { romaji: 'mizu', hiragana: 'みず', katakana: 'ミズ', english: 'water', category: 'food' },
    { romaji: 'ocha', hiragana: 'おちゃ', katakana: 'オチャ', english: 'tea', category: 'food' },
    { romaji: 'koohii', hiragana: 'コーヒー', katakana: 'コーヒー', english: 'coffee', category: 'food' },
    { romaji: 'pan', hiragana: 'パン', katakana: 'パン', english: 'bread', category: 'food' },
    { romaji: 'tamago', hiragana: 'たまご', katakana: 'タマゴ', english: 'egg', category: 'food' },
    { romaji: 'niku', hiragana: 'にく', katakana: 'ニク', english: 'meat', category: 'food' },
    { romaji: 'sakana', hiragana: 'さかな', katakana: 'サカナ', english: 'fish', category: 'food' },
    
    // Time
    { romaji: 'kyou', hiragana: 'きょう', katakana: 'キョウ', english: 'today', category: 'time' },
    { romaji: 'ashita', hiragana: 'あした', katakana: 'アシタ', english: 'tomorrow', category: 'time' },
    { romaji: 'kinou', hiragana: 'きのう', katakana: 'キノウ', english: 'yesterday', category: 'time' },
    { romaji: 'ima', hiragana: 'いま', katakana: 'イマ', english: 'now', category: 'time' },
    { romaji: 'asa', hiragana: 'あさ', katakana: 'アサ', english: 'morning', category: 'time' },
    { romaji: 'yoru', hiragana: 'よる', katakana: 'ヨル', english: 'night', category: 'time' },
    
    // Basic Words
    { romaji: 'watashi', hiragana: 'わたし', katakana: 'ワタシ', english: 'I/me', category: 'pronouns' },
    { romaji: 'anata', hiragana: 'あなた', katakana: 'アナタ', english: 'you', category: 'pronouns' },
    { romaji: 'kare', hiragana: 'かれ', katakana: 'カレ', english: 'he/him', category: 'pronouns' },
    { romaji: 'kanojo', hiragana: 'かのじょ', katakana: 'カノジョ', english: 'she/her', category: 'pronouns' },
    { romaji: 'hon', hiragana: 'ほん', katakana: 'ホン', english: 'book', category: 'objects' },
    { romaji: 'enpitsu', hiragana: 'えんぴつ', katakana: 'エンピツ', english: 'pencil', category: 'objects' },
    { romaji: 'kuruma', hiragana: 'くるま', katakana: 'クルマ', english: 'car', category: 'objects' },
    { romaji: 'ie', hiragana: 'いえ', katakana: 'イエ', english: 'house', category: 'objects' }
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
        this.currentLessonMode = 'hiragana'; // Default lesson mode
        
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
            vocabularyBtn: document.getElementById('vocabulary-btn'),
            backToMainBtn: document.getElementById('back-to-main'),
            
            // Study/Lessons elements
            lessonsSection: document.getElementById('lessons-section'),
            lessonsTitle: document.getElementById('lessons-title'),
            lessonsSubtitle: document.getElementById('lessons-subtitle'),
            lessonsToggle: document.getElementById('lessons-toggle'),
            lessonsHiraganaBtn: document.getElementById('lessons-hiragana-btn'),
            lessonsKatakanaBtn: document.getElementById('lessons-katakana-btn'),
            lessonsBackBtn: document.getElementById('lessons-back-btn'),
            charactersGrid: document.getElementById('characters-grid'),
            
            // Vocabulary elements
            vocabularySection: document.getElementById('vocabulary-section'),
            vocabularyTitle: document.getElementById('vocabulary-title'),
            vocabularySubtitle: document.getElementById('vocabulary-subtitle'),
            vocabularySearch: document.getElementById('vocabulary-search'),
            categorySelect: document.getElementById('category-select'),
            vocabularyGrid: document.getElementById('vocabulary-grid'),
            vocabularyBackBtn: document.getElementById('vocabulary-back-btn'),
            
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
        this.elements.vocabularyBtn.addEventListener('click', () => this.showVocabularyMode());
        this.elements.backToMainBtn.addEventListener('click', () => this.showMainMenu());
        
        // Lesson toggle events
        this.elements.lessonsHiraganaBtn.addEventListener('click', () => this.switchLessonMode('hiragana'));
        this.elements.lessonsKatakanaBtn.addEventListener('click', () => this.switchLessonMode('katakana'));
        this.elements.lessonsBackBtn.addEventListener('click', () => this.showMainMenu());
        
        // Vocabulary events
        this.elements.vocabularyBackBtn.addEventListener('click', () => this.showMainMenu());
        this.elements.vocabularySearch.addEventListener('input', (e) => this.filterVocabulary());
        this.elements.categorySelect.addEventListener('change', (e) => this.filterVocabulary());
        
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
        this.currentLessonMode = 'hiragana'; // Reset lesson mode
        
        // Reset title and subtitle
        this.elements.mainTitle.textContent = '🏮 Kana Quiz';
        this.elements.subtitle.textContent = 'Choose your learning mode!';
        
        // Show/hide appropriate sections
        this.elements.modeSelection.style.display = 'block';
        this.elements.lessonsSection.style.display = 'none';
        this.elements.vocabularySection.style.display = 'none';
        this.elements.quizSection.style.display = 'none';
        this.elements.backToMainBtn.style.display = 'none';
        this.elements.studyBtn.style.display = 'inline-block';
        this.elements.vocabularyBtn.style.display = 'inline-block';
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
        this.currentView = 'study';
        
        // Show lessons section
        this.elements.modeSelection.style.display = 'none';
        this.elements.lessonsSection.style.display = 'block';
        this.elements.quizSection.style.display = 'none';
        this.elements.backToMainBtn.style.display = 'none'; // Hide the main back button
        
        // Update lessons title
        this.elements.lessonsTitle.textContent = 'Study Characters';
        this.elements.lessonsSubtitle.textContent = 'Review all characters and switch between Hiragana and Katakana';
        
        // Reset to hiragana by default and update toggle
        this.currentLessonMode = 'hiragana';
        this.updateLessonToggle();
        this.populateCharactersGrid();
    }
    
    showVocabularyMode() {
        this.currentView = 'vocabulary';
        
        // Show vocabulary section
        this.elements.modeSelection.style.display = 'none';
        this.elements.lessonsSection.style.display = 'none';
        this.elements.vocabularySection.style.display = 'block';
        this.elements.quizSection.style.display = 'none';
        this.elements.backToMainBtn.style.display = 'none';
        
        // Reset search and filter
        this.elements.vocabularySearch.value = '';
        this.elements.categorySelect.value = 'all';
        
        this.populateVocabularyGrid();
    }
    
    populateVocabularyGrid(filteredData = null) {
        const dataToShow = filteredData || vocabularyData;
        this.elements.vocabularyGrid.innerHTML = '';
        
        dataToShow.forEach(item => {
            const vocabCard = document.createElement('div');
            vocabCard.className = 'vocabulary-card';
            
            vocabCard.innerHTML = `
                <div class="vocab-category">${item.category}</div>
                <div class="vocab-formats">
                    <div class="vocab-format">
                        <span class="format-label">Romaji:</span>
                        <span class="format-text romaji-text">${item.romaji}</span>
                    </div>
                    <div class="vocab-format">
                        <span class="format-label">Hiragana:</span>
                        <span class="format-text hiragana-text">${item.hiragana}</span>
                    </div>
                    <div class="vocab-format">
                        <span class="format-label">Katakana:</span>
                        <span class="format-text katakana-text">${item.katakana}</span>
                    </div>
                    <div class="vocab-format english-format">
                        <span class="format-label">English:</span>
                        <span class="format-text english-text">${item.english}</span>
                    </div>
                </div>
            `;
            
            this.elements.vocabularyGrid.appendChild(vocabCard);
        });
    }
    
    filterVocabulary() {
        const searchTerm = this.elements.vocabularySearch.value.toLowerCase();
        const selectedCategory = this.elements.categorySelect.value;
        
        let filteredData = vocabularyData;
        
        // Filter by category
        if (selectedCategory !== 'all') {
            filteredData = filteredData.filter(item => item.category === selectedCategory);
        }
        
        // Filter by search term
        if (searchTerm) {
            filteredData = filteredData.filter(item => 
                item.romaji.toLowerCase().includes(searchTerm) ||
                item.hiragana.includes(searchTerm) ||
                item.katakana.includes(searchTerm) ||
                item.english.toLowerCase().includes(searchTerm)
            );
        }
        
        this.populateVocabularyGrid(filteredData);
    }
    
    switchLessonMode(mode) {
        this.currentLessonMode = mode;
        this.updateLessonToggle();
        this.populateCharactersGrid();
    }
    
    updateLessonToggle() {
        // Remove active class from both buttons
        this.elements.lessonsHiraganaBtn.classList.remove('active');
        this.elements.lessonsKatakanaBtn.classList.remove('active');
        
        // Add active class to current mode button
        if (this.currentLessonMode === 'hiragana') {
            this.elements.lessonsHiraganaBtn.classList.add('active');
        } else {
            this.elements.lessonsKatakanaBtn.classList.add('active');
        }
    }
    
    populateCharactersGrid() {
        // Use lesson mode for study view, or current mode for quiz view
        const displayMode = this.currentView === 'study' ? this.currentLessonMode : this.currentMode;
        const currentData = displayMode === 'katakana' ? katakanaData : hiraganaData;
        const charKey = displayMode === 'katakana' ? 'katakana' : 'hiragana';
        
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
