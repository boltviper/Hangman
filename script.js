const wordList = ["hangman", "javascript", "programming", "computer", "coding", "playstation"];
let chosenWord = "";
let guessedWord = [];
let remainingAttempts = 6;

// Select a random word from the wordList
function chooseRandomWord() {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
}

// Initialize the game
function initializeGame() {
    chooseRandomWord();
    guessedWord = Array(chosenWord.length).fill('_');
    document.getElementById('wordToGuess').textContent = guessedWord.join(' ');
    remainingAttempts = 6;
    document.getElementById('message').textContent = '';
    document.getElementById('letterInput').value = '';
    document.getElementById('resetButton').style.display = 'none'; // Skjul knappen ved spillets start
}

// Check if the guessed letter is in the word
function checkLetter() {
    const letterInput = document.getElementById('letterInput').value.toLowerCase();

    if (letterInput.length === 1 && /^[a-z]+$/.test(letterInput)) {
        if (chosenWord.includes(letterInput)) {
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === letterInput) {
                    guessedWord[i] = letterInput;
                }
            }
            document.getElementById('wordToGuess').textContent = guessedWord.join(' ');
            if (!guessedWord.includes('_')) {
                document.getElementById('message').textContent = 'Congratulations! You won!';
                document.getElementById('resetButton').style.display = 'block'; // Vis knappen når spillet er vundet
            }
        } else {
            remainingAttempts--;
            if (remainingAttempts === 0) {
                document.getElementById('message').textContent = `You lost! The word was "${chosenWord}".`;
                document.getElementById('resetButton').style.display = 'block'; // Vis knappen når spillet er tabt
            } else {
                document.getElementById('message').textContent = `Try again. Remaining attempts: ${remainingAttempts}`;
            }
        }
    } else {
        document.getElementById('message').textContent = 'Please enter a valid single letter.';
    }

    document.getElementById('letterInput').value = '';
}

// Reset the game
function resetGame() {
    initializeGame();
    document.getElementById('resetButton').style.display = 'none'; // Skjul knappen efter nulstilling
}

initializeGame();