let arr = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return (arr[(Math.floor(Math.random() * arr.length))]);    
}

console.log(getComputerChoice())