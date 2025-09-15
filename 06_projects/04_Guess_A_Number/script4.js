const RandomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.getElementById('submit');
const userInput = document.getElementById('guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('#resultparas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// to check if the game is running
// if playGame is true, the game is running
// if playGame is false, the game is over
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) { 
    // to check if the input is valid
    if (isNaN(guess)) {
        displayMessage('Please enter a valid number');
    }
    else if (guess < 1) {
        displayMessage('Please enter a number greater than 0');
    }
    else if(guess >100){
        displayMessage('Please enter a number less than 100');
    }
    else {
        prevGuess.push(guess);
        if(numGuess ===11){
            displayMessage(`Game Over. Random number was ${RandomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess) {
    // to check if the guess is correct, too high or too low
    if(guess === RandomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuess} guesses!`);
        endGame();
    }
    else if(guess < RandomNumber){
        displayMessage('Your guess is too low!');
    }
    else if(guess > RandomNumber){
        displayMessage('Your guess is too high!');
    }
}

function displayGuess(guess) {
    // to display the previous guesses
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} guesses remaining`;
}

function displayMessage(message) {
    // to display messages to the user
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    // to end the game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<button id="reset">Start New Game</button>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    // to reset the game
    playGame = true;
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} guesses remaining`;
    lowOrHi.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    RandomNumber = Math.floor(Math.random() * 100) + 1;
}