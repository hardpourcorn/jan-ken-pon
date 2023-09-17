// Computer pulls random pick from array
const choices = ["rock", "paper", "scissors"];

// first to 5 wins(ends game)
// Make counter for scoreboard

function game() {
    playRound();

}

function playRound() {
    const playerSelection = getPlayerChoice();
    const compSelection = getComputerChoice();
}

function getPlayerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    input = input.toLowerCase();
    console.log(input);
}


function getComputerChoice() {
    return (choices[(Math.floor(Math.random() * choices.length))]);    
}

function validateInput(choice){
    if (choices.includes(choice)){
        return true;
    }
     return false
}

game();

