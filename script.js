choices = ["Rock","Paper","Scissors"];

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
            return "Invalid Option";
    }
}
