let enter = document.getElementById("enterButton");
let reset = document.getElementById("resetButton");
let output = document.getElementById("outputText");

let randomNumber = Math.ceil(Math.random() * 100);

function checkNumber() {
  let input = document.getElementById("userInput").value;
  if (input == randomNumber) {
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
enter.addEventListener("click", checkNumber);
reset.addEventListener("click", function () {
  location.reload();
});