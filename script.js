choices = ["Rock","Paper","Scissors"];
humanScore = 0;
computerScore = 0;

function getComputerChoice(){
    randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function getHumanChoice(){
    choice = prompt("Choose Rock, Paper or Scissors!");
    choiceLower = choice.toLowerCase();
    switch(choiceLower){
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

function playRound(humanChoice,computerChoice){
    if (humanChoice == "Invalid option"){
        console.log("Invalid option. Please try again!");
        return;
    }
    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    if (humanChoice == computerChoice){
        console.log("It's a tie!");
    }
    if((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")){
        console.log("You win!")
        humanScore++;
    }else{
        console.log("You lose!")
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);