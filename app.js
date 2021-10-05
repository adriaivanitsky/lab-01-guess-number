// import functions and grab DOM elements
const input = document.getElementById('input'); //user's guess
const button = document.getElementById('button');    
const result = document.getElementById('result'); //display if user is correct or not
const guessesRemaining = document.getElementById('guesses-remaining');
const tryAgainButton = document.getElementById('try-again');
// initialize global state

// set event listeners 
let randomNum = Math.ceil(Math.random() * 20);
let numGuesses = 4;

function promptRestart() {
    button.style.display = 'none';
    input.style.display = 'none';
    tryAgainButton.style.display = 'inline';
}

button.addEventListener('click', ()=>{
    let inputNum = Number(input.value);
    numGuesses--;
    guessesRemaining.textContent = numGuesses; 
    if (inputNum === randomNum) {
        result.textContent = 'You win!';
        promptRestart();
    } else if (numGuesses <= 0) {
        result.textContent = 'You lose :(';
        promptRestart();
    } else if (inputNum > randomNum){
        result.textContent = 'Too high!';
    } else if (inputNum < randomNum){
        result.textContent = 'Too low';
    } 
  
});
  
tryAgainButton.addEventListener('click', ()=>{
    randomNum = Math.ceil(Math.random() * 20);
    numGuesses = 4;
    input.style.display = 'inline';
    button.style.display = 'inline';
    result.textContent = '';

});