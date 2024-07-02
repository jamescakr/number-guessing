let randomNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => (userInput.value = ""));

function pickRandomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "number has to be between 1 and 100";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "Same number detected, pick another number";
    return;
  }
  chances--;
  chanceArea.textContent = `you have ${chances} chances left`;

  if (userValue < randomNum) {
    resultArea.textContent = "Up";
  } else if (userValue > randomNum) {
    resultArea.textContent = "Down";
  } else {
    resultArea.textContent = "Congrats!";
    chanceArea.textContent = "";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
    resultArea.textContent = "Try Again";
    chanceArea.textContent = "No chance left...";
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  playButton.disabled = false;
  resultArea.textContent = "Up? or Down?";
  chances = 5;
  chanceArea.textContent = `you have ${chances} chances left`;
  history = [];
}

pickRandomNum();
