let randomNum = 0;
let playButton = document.getElementById("play-button");
playButton.addEventListener("click", play);
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

function pickRandomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < randomNum) {
    resultArea.textContent = "Up";
  } else if (userValue > randomNum) {
    resultArea.textContent = "Down";
  } else {
    resultArea.textContent = "Congrats!";
  }
}
pickRandomNum();
