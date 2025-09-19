# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a pure client-side Japanese Hiragana learning quiz application built with vanilla HTML, CSS, and JavaScript. No build process, dependencies, or server required - it runs directly in the browser.

## Development Commands

### Running the Application
```powershell
# Open the application in your default browser
Start-Process "index.html"
```

```powershell
# Serve locally with Python (if available)
python -m http.server 8000
# Then open http://localhost:8000
```

```powershell
# Serve locally with Node.js (if available)
npx serve .
# Then open http://localhost:3000
```

### Development Workflow
```powershell
# Open all source files for editing
code index.html script.js styles.css

# Quick validation (if you have Node.js tools)
npx htmlhint index.html
npx stylelint styles.css
npx eslint script.js
```

## Architecture Overview

### Application Structure
The application follows a simple but well-organized architecture:

- **Single Page Application**: All functionality contained in one HTML page
- **Class-based JavaScript**: Main logic encapsulated in `HiraganaQuiz` class
- **Event-driven Design**: User interactions drive state changes
- **DOM Manipulation**: Direct DOM updates without frameworks
- **Stateful UI**: Quiz state managed in memory with visual feedback

### Core Components

#### HiraganaQuiz Class (`script.js`)
The main application controller that manages:
- **State Management**: Current question, score, quiz progress
- **Question Generation**: Randomized hiragana character selection
- **User Interaction**: Input handling, answer validation, navigation
- **UI Updates**: Dynamic content, progress tracking, results display
- **Feedback System**: Immediate response to user answers

#### Key Data Structure
```javascript path=null start=null
const hiraganaData = [
    { hiragana: 'あ', romaji: 'a' },
    // ... 46 total characters
];
```

#### UI State Flow
1. **Initial State**: Start button displayed, quiz hidden
2. **Quiz Active**: Questions displayed sequentially with input/submit
3. **Answer Feedback**: Immediate correct/incorrect feedback
4. **Results State**: Final score and review of missed characters
5. **Reset State**: Return to initial state with new randomized questions

### File Responsibilities

- **`index.html`**: Structure, semantic HTML, accessibility attributes
- **`styles.css`**: Complete styling, responsive design, animations
- **`script.js`**: All application logic, no external dependencies

### Key Features Implementation

#### Randomization System
- Questions shuffled using `Array.sort(() => Math.random() - 0.5)`
- New randomized set generated on each quiz restart

#### Progress Tracking
- Real-time score updates during quiz
- Visual progress bar showing completion percentage
- Final results with accuracy calculation

#### Responsive Design
- Mobile-first CSS approach
- Flexbox and CSS Grid for layout
- Media queries for different screen sizes

#### Keyboard Navigation
- Enter key support for answer submission
- Automatic focus management for accessibility

## Customization Guide

### Adding New Characters
Modify the `hiraganaData` array in `script.js`:
```javascript path=/Users/xynah/hiragana-quiz/script.js start=2
const hiraganaData = [
    { hiragana: 'あ', romaji: 'a' },
    // Add new characters here
];
```

### Styling Changes
- Color scheme: Modify CSS custom properties or gradient definitions
- Layout: Adjust container max-width, padding, spacing
- Typography: Change font families in body and `.hiragana-character`

### Quiz Behavior
- Question count: Modify array length or add filtering logic
- Scoring: Update percentage calculations in `updateScore()`
- Feedback messages: Customize text in `showFeedback()` calls

## File Organization

The codebase is intentionally simple with clear separation of concerns:
- **Structure** (HTML): Semantic elements, proper form handling
- **Presentation** (CSS): Visual design, responsive layout, animations
- **Behavior** (JavaScript): Application logic, user interaction, state management

## Browser Compatibility

Designed for modern browsers with support for:
- ES6+ features (classes, arrow functions, template literals)
- CSS Grid and Flexbox
- DOM manipulation APIs
- Local storage (if future persistence needed)

Target browsers: Chrome 60+, Firefox 55+, Safari 11+, Edge 79+