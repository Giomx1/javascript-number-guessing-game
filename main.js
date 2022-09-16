let enter = document.getElementById("enterButton");//Grabbing my ids with id method.
let reset = document.getElementById("resetButton");
let output = document.getElementById("outputText");
let input = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);//User must guess a number from 0-100 so a random number must be created every time the game is played.
let guessesLeft = 3
let userGuess = Number(input.value)

function checkNumber() {//function with variable checkNumber.
  if (userGuess > randomNumber){// Using if methods to display what will be shown if user is right, ,guess too high, guess too low, or invalid entry
    output.innerHTML = "You guessed too high";
    output.style.color = "red";
  }
  if (userGuess < randomNumber) {
    output.innerHTML = "You guessed too low";
    output.style.color = "red";
  }
  if (userGuess > 100) {
    output.innerHTML = "Number cannot be greater than 100";
  }
   if (userGuess < 1) {
    output.innerHTML = "Number cannot be lower than 1";
  }
  if (userGuess === randomNumber) {
    output.innerHTML = "You guessed right";
    output.style.color = "green";
   }
  if (userGuess != randomNumber) {
    guessesLeft --; 
    alert(guessesLeft + " tries left")
   }
    if (guessesLeft === 0) {
    alert ("Game Over, correct answer was " + randomNumber);
    addEventListener("click", resetGame)
   }
}


enter.addEventListener("click", checkNumber);//function will run with "click" event


function resetGame() {
  randomNumber = Math.ceil(Math.random() * 100);
  output.innerHTML = "Game has been reset";
  guessesLeft = 3;
  if (userGuess != randomNumber) {
     guessesLeft --;
    alert(guessesLeft + " tries left")
   }
    if (guessesLeft === 0) {
    alert ("Game Over, correct answer was " + randomNumber);
    addEventListener("click", resetGame)
   }
}
reset.addEventListener("click", resetGame);
