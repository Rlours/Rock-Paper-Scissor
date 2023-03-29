// Computer Choice for Rock Paper Selection
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  return randomNumber;
}

// ----* Computer selection for Rock paper Scissor
function play(player, computer) {
  if (player === 1 && computer === 2) {
    return "You Lose";
  } else if (player === 1 && computer === 3) {
    return "You Won";
  } else if (player === 2 && computer === 1) {
    return "You Won";
  } else if (player === 2 && computer === 3) {
    return "You Lose";
  } else if (player === 3 && computer === 1) {
    return "You Lose";
  } else if (player === 3 && computer === 2) {
    return "You Won";
  } else {
    return "draw";
  }
}
let playerScore = 0;
let computerScore = 0;

function display(e) {
  if (playerScore === 5 || computerScore === 5) {
    return;
  }
  let playerSelection = Number(e.target.value);
  let computerSelection = getComputerChoice();
  let roundResult = play(playerSelection, computerSelection);

  if (roundResult === "You Won") {
    playerScore++;
    document.getElementById("player-score").textContent = playerScore;
  } else if (roundResult === "You Lose") {
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
  }

  if (playerScore === 5) {
    document.querySelector(".message").textContent = `The winner is Player`;
  } else if (computerScore === 5) {
    document.querySelector(".message").textContent = `The winner is Computer`;
  }
}

let choices = document.querySelectorAll(".btn");
choices.forEach((choice) => choice.addEventListener("click", display));

function reset() {
  document.getElementById("player-score").textContent = 0;
  document.getElementById("computer-score").textContent = 0;
  document.querySelector(".message").textContent = `The winner is `;
}

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);
