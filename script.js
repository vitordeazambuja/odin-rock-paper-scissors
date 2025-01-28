choices = ["Rock","Paper","Scissors"];

function getComputerChoice(){
    randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

