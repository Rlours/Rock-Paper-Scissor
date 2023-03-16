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
  let playerString = player.toLowerCase();

  // your code here!
  if (playerString === "rock" && computer === "paper") {
    return "Computer Won";
  } else if (playerString === "rock" && computer === "scissor") {
    return "You Won";
  } else if (playerString === "rock" && computer === "rock") {
    return "Draw";
  } else if (playerString === "paper" && computer === "rock") {
    return "You Won";
  } else if (playerString === " paper" && computer === "scissor") {
    return "Computer Won";
  } else if (playerString === "paper" && computer === " paper") {
    return "draw";
  } else if (playerString === "scissor" && computer === "paper") {
    return "Computer Won";
  } else if (playerString === "scissor" && computer === "rock") {
    return "You Won";
  } else {
    return "draw";
  }
}

// console.log(playRound(playerSelection, getComputerChoice()));

function game() {
  let score;
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    // your code here!
    let playerSelection = prompt("Please enter your choice");
    let roundResult = playRound(playerSelection, getComputerChoice());

    if (roundResult === "You Won") {
      playerScore++;
    } else if (roundResult === "Computer Won") {
      computerScore++;
    }
  }
  console.log("Final score:");
  console.log("Player: " + playerScore);
  console.log("Computer: " + computerScore);
}
game()
