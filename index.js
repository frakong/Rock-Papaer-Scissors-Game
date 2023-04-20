let playerLine = document.querySelector(".player-line");
let computerLine = document.querySelector(".computer-line");
let resultLine = document.querySelector(".result-line");

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

rockButton.addEventListener("click", () => {
  playerLine.innerHTML = "Player Selects: Rock";
})
paperButton.addEventListener("click", () => {
  playerLine.innerHTML = "Player Selects: Paper";
})
scissorsButton.addEventListener("click", () => {
  playerLine.innerHTML = "Player Selects: Scissors";
})
