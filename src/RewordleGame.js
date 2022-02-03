class RewordleGame {
    guesses;
    texts;
    states;
    correctWord;

    constructor(guesses) {
        this.guesses = [];
        this.texts = [];
        for (let i = 0; i < guesses.length; i++) {
            this.guesses.push(guesses[i].toUpperCase());
            let text = [];
            for (let j = 0; j < guesses[i].length; j++) {
                if (i < (guesses.length - 1)) {
                    text.push('');
                } else {
                    text.push(guesses[i][j]);
                }
            }
            this.texts.push(text);
        }
        this.getStateList();
    }

    // Computes the re-wordle tile layout
    getStateList() {
        this.correctWord = this.guesses[this.guesses.length - 1];
        this.states = [];
        for (let i = 0; i < this.guesses.length - 1; i++) {
            let state = [];
            for (let j = 0; j < this.guesses[i].length; j++) {
                state.push(0);
            }
            let guess = this.guesses[i];
            // First do greens
            for (let j = 0; j < guess.length; j++) {
                if (guess[j] === this.correctWord[j]) {
                    state[j] = 2;
                }
            }
            // Now do yellows
            // Complexity arises when we have to consider repeats
            // Plan is to only mark the first of the repeats as yellow, then break
            // This way if there are 2 in the word and 2 yellows
            // Each will get mapped individually
            for (let j = 0; j < this.correctWord.length; j++) {
                let char = this.correctWord[j];
                for (let k = 0; k < guess.length; k++) {
                    if (guess[k] === char) {
                        // Only update if it wasn't already caught
                        // Avoids overwriting greens
                        if (state[k] === 0 && state[j] !== 2) {
                            state[k] = 1;
                            break;
                        }
                    }
                }
            }
            // Remaining are greys and it's all chill
            this.states.push(state);
        }
        // Mark the last guess as all greens
        let state = [];
        for (let i = 0; i < this.correctWord.length; i++) {
            state.push(2);
        }
        this.states.push(state);
    }

    getTextList() {
        return this.texts;
    }

    processGuess(guessString, guessRow) {
        let secretWord = this.guesses[guessRow];
        guessString = guessString.toUpperCase();
        console.log("Process guess with guess: " + guessString + " and row: " + guessRow);
        for (let i = 0; i < guessString.length; i++) {
            if (guessString[i] === secretWord[i]) {
                this.texts[guessRow][i] = secretWord[i];
            }
        }
    }
}

export default RewordleGame;