// Computer Choice for Rock Paper Selection
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  return randomNumber;
}

console.log("Output after get computer function", `${getComputerChoice()}`);
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
  let playerSelection = Number(e.target.value);
  console.log("Player Choice in display", playerSelection);
  let computerSelection = getComputerChoice();
  console.log("Computer choice in display function", computerSelection);
  let roundResult = play(playerSelection, computerSelection);
  console.log("Computer choice after roundresult function", computerSelection);

  if (roundResult === "You Won") {
    playerScore++;
  } else if (roundResult === "You Lose") {
    computerScore++;
  }
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

let choices = document.querySelectorAll(".btn");
choices.forEach((choice) => choice.addEventListener("click", display));
