// JavaScript code for the game
const choices = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById("result");

// Event listeners for player's choices
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

// Function to play the game
function playGame(playerChoice) {
    const computerChoice = getRandomChoice();
    const result = getGameResult(playerChoice, computerChoice);
    displayResult(result);
}

// Function to get a random computer choice
function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the game result
function getGameResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Function to display the result
function displayResult(result) {
    resultDisplay.textContent = result;
}
