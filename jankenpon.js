// JavaScript code for the game
const choices = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById("result");
const roundResultDisplay = document.getElementById("round-result");
const scoreDisplay = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

// Event listeners for player's choices
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

// Function to play a game
function playGame(playerChoice) {
    if (playerScore < 3 && computerScore < 3) {
        const computerChoice = getRandomChoice();
        const result = getGameResult(playerChoice, computerChoice);
        updateScore(result);
        displayRoundResult(result);
        if (playerScore === 3) {
            displayFinalResult("You win the match!");
        } else if (computerScore === 3) {
            displayFinalResult("Computer wins the match!");
        }
    }
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

// Function to update and display the score
function updateScore(result) {
    if (result === "You win!") {
        playerScore++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Function to display the result of each round
function displayRoundResult(result) {
    roundResultDisplay.textContent = result;
}

// Function to display the final result
function displayFinalResult(message) {
    resultDisplay.textContent = message;
}