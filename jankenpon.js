// Computer pulls random pick from array
let arr = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return (arr[(Math.floor(Math.random() * arr.length))]);    
}

console.log(getComputerChoice())

// User inputs their choice(userSelection) from same array, case insensitive

// userSelection & compSelection are compared

// If userSelection === compSelection, return "It's a tie!"

// Write parameters so Rock > Scissors, Scissors > Paper, Paper > Rock