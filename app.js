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

button.addEventListener('click', ()=>{
    numGuesses--;
    guessesRemaining.textContent = numGuesses; 
    if (input === randomNum) {
        result.textContent = 'You win!';
    } else if (guessesRemaining === 0) {
        result.textContent = 'You lose :(';
        tryAgainButton.style.display = 'inline';
    } else if (input > randomNum){
        result.textContent = 'Too high!';
    } else if (input < randomNum){
        result.textContent = 'Too low';
    } 
  
});
  
tryAgainButton.addEventListener('click', ()=>{
    randomNum = Math.ceil(Math.random() * 20);
    numGuesses = 4;


});