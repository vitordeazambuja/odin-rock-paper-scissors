choices = ["Rock", "Paper", "Scissors"];
humanScore = 0;
computerScore = 0;

function getComputerChoice() {
  randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  choice = prompt("Choose Rock, Paper or Scissors!");
  choiceLower = choice.toLowerCase();
  switch (choiceLower) {
    case "rock":
      return "Rock";
      break;
    case "paper":
      return "Paper";
      break;
    case "scissors":
      return "Scissors";
      break;
    default:
      return "Invalid option";
  }
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Invalid option") {
      console.log("Invalid option. Please try again!");
      return;
    }
    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    if (humanChoice == computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice == "Rock" && computerChoice == "Scissors") ||
      (humanChoice == "Paper" && computerChoice == "Rock") ||
      (humanChoice == "Scissors" && computerChoice == "Paper")
    ) {
      console.log("You won the round!");
      humanScore++;
    } else {
      console.log("You lose the round!");
      computerScore++;
    }
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log("Final Scores:");
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose! Computer wins the game!");
  } else {
    console.log("Tie game!");
  }
}

playGame();
