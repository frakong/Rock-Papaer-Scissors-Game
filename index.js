let playerLine = document.querySelector(".player-line");
let computerLine = document.querySelector(".computer-line");
let resultLine = document.querySelector(".result-line");

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

rockButton.addEventListener("click", () => {
  playerLine.innerHTML = "Player Selects: Rock";
  computerPlays();
  //updateResult();
})
paperButton.addEventListener("click", () => {
  playerLine.innerHTML = "Player Selects: Paper";
  computerPlays();
  //updateResult();
})
scissorsButton.addEventListener("click", () => {
  playerLine.innerHTML = "Player Selects: Scissors";
  computerPlays();
  //updateResult();
})

function computerPlays() {
  let computerItem = Math.floor(Math.random()*3) + 1; //Returns integer that's 1, 2, or 3
  switch (computerItem){
    case 1:
      computerLine.innerHTML = "Computer Selects: Rock";
      break;
    case 2:
      computerLine.innerHTML = "Computer Selects: Paper";
      break;
    case 3:
      computerLine.innerHTML = "Computer Selects: Scissors";
      break;
  }
}




