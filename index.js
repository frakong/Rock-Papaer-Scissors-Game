let playerLine = document.querySelector(".player-line");
let computerLine = document.querySelector(".computer-line");
let resultLine = document.querySelector(".result-line");

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

//1 = Rock, 2 = Paper, 3 = Scissors
let playerChoiceNumber = 0;
let computerChoiceNumber = 0;

rockButton.addEventListener("click", () => {
  playerLine.innerHTML = "Player Selects: Rock";
  playerChoiceNumber = 1;
  computerPlays();
  updateResult();
})
paperButton.addEventListener("click", () => {
  playerLine.innerHTML = "Player Selects: Paper";
  playerChoiceNumber = 2;
  computerPlays();
  updateResult();
})
scissorsButton.addEventListener("click", () => {
  playerLine.innerHTML = "Player Selects: Scissors";
  playerChoiceNumber = 3;
  computerPlays();
  updateResult();
})

function computerPlays() {
  let computerItem = Math.floor(Math.random()*3) + 1; //Returns integer that's 1, 2, or 3
  switch (computerItem){
    case 1:
      computerLine.innerHTML = "Computer Selects: Rock";
      computerChoiceNumber = 1;
      break;
    case 2:
      computerLine.innerHTML = "Computer Selects: Paper";
      computerChoiceNumber = 2;
      break;
    case 3:
      computerLine.innerHTML = "Computer Selects: Scissors";
      computerChoiceNumber = 3;
      break;
  }
}

function updateResult() {
  if (playerChoiceNumber == computerChoiceNumber){
    resultLine.innerHTML = "DRAW";
  }
  else if (playerChoiceNumber == (computerChoiceNumber % 3) + 1){
    resultLine.innerHTML = "YOU WIN";
  }
  else {
    resultLine.innerHTML = "YOU LOSE";
  }
}


