var buttonOne = document.getElementById("playerOne");
var buttonTwo = document.getElementById("playerTwo");
var resetButton = document.getElementById("reset");
var scoreOne = document.querySelector("#scoreOne");
var scoreTwo = document.querySelector("#scoreTwo");
var green = document.querySelector("winner");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;



buttonOne.addEventListener("click", function() {

if (!gameOver) {
  p1Score++;
  if (p1Score === winningScore) {
    scoreOne.classList.add("winner");
    gameOver = true;
  }
  scoreOne.textContent = p1Score;
}
});

buttonTwo.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      scoreTwo.classList.add("winner");
      gameOver = true;
    }
    scoreTwo.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  scoreOne.classList.remove("winner");
  scoreTwo.classList.remove("winner");
  gameOver = false;
  alert("New Game!")
});

numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  scoreOne.classList.remove("winner");
  scoreTwo.classList.remove("winner");
  gameOver = false;
};
