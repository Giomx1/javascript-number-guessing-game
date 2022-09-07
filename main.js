let enter = document.getElementById("enterButton");//Grabbing my ids with id method.
let reset = document.getElementById("resetButton");
let output = document.getElementById("outputText");

let randomNumber = Math.ceil(Math.random() * 100);//User must guess a number from 0-100 so a random number must be created every time the game is played.

function checkNumber() {//function with variable checkNumber.
  let input = document.getElementById("userInput").value;//using this id method to to later use it to program player input possibilities 
  if (input == randomNumber) {// Using if methods to display what will be shown if user is right, ,guess too high, guess too low, or invalid entry 
    output.innerHTML = "You guessed right";
    output.style.color = "green";
  }
  if (input > randomNumber) {
    output.innerHTML = "You guessed too high";
    output.style.color = "red";
  }
  if (input < randomNumber) {
    output.innerHTML = "You guessed too low";
    output.style.color = "red";
  }
  if (input > 100) {
    output.innerHTML = "Number cannot be greater than 100";
  }
  if (input < 1) {
    output.innerHTML = "Number cannot be lower than 1";
  }
}
enter.addEventListener("click", checkNumber);//function will run with "click" event
reset.addEventListener("click", function () {//page will reload with reset button like a refresh button.
  location.reload();
});
