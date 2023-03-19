function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(player, computer) {
  // your code here!
  if (player === "ROCK" && computer === "PAPER") {
    return "Computer Won";
  } else if (player === "ROCK" && computer === "SCISSOR") {
    return "You Won";
  } else if (player === "ROCK" && computer === "ROCK") {
    return "Draw";
  } else if (player === "PAPER" && computer === "ROCK") {
    return "You Won";
  } else if (player === "PAPER" && computer === "SCISSOR") {
    return "Computer Won";
  } else if (player === "PAPER" && computer === "PAPER") {
    return "draw";
  } else if (player === "SCISSOR" && computer === "PAPER") {
    return "Computer Won";
  } else if (player === "SCISSOR" && computer === "ROCK") {
    return "You Won";
  } else {
    return "draw";
  }
}

function updateScores(result) {
  let playerScore = 0;
  let computerScore = 0;
  if (result === "You Won") {
    playerScore++;
  } else if (result === "Computer Won") {
    computerScore++;
  }
  console.log(playerScore, computerScore);
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function display(e) {
  let playerSelection = e.target.textContent;
  let roundResult = playRound(playerSelection, getComputerChoice());
  updateScores(roundResult);
}
let choices = document.querySelectorAll(".btn");
choices.forEach((choice) => choice.addEventListener("click", display));
