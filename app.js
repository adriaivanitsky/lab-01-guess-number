// import functions and grab DOM elements
const input = document.getElementById('input'); //user's guess
const button = document.getElementById('button');    
const result = document.getElementById('result'); //display if user is correct or not
const guessesRemaining = document.getElementById('guesses-remaining');
// initialize global state

// set event listeners 

let randomNum = Math.ceil(Math.rondom() * 20);
let numGuesses = 4;

button.addEventListener('click', ()=>{
  numGuesses--;
  guessesRemaining.textcontent = numGuesses; 

  if(input === randomNum) {
    result.textContent = 'You win!';
  } else if (guessesRemaining === 0) {
      result.textContent = 'You lose :(';
  } else if (input > randomNum){
    result.textContent = 'Too high!';
  } else if (input < randomNum){
    result.textContent = 'Too low';
  }
  
});
  
