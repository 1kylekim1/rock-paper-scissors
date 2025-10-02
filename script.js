function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors: ");
    return humanChoice.toLowerCase();
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const scoreboardDiv = document.querySelector("#scoreboard");

const humanScoreboard = document.createElement("p");
humanScoreboard.setAttribute("id", "humanScoreboard");
scoreboardDiv.appendChild(humanScoreboard).textContent = "Human: " + humanScore;

const computerScoreboard = document.createElement("p");
computerScoreboard.setAttribute("id", "computerScoreboard");
scoreboardDiv.appendChild(computerScoreboard).textContent = "Computer: " + computerScore;

function handleRockClick() {
    playRound("rock", getComputerChoice());
}

function handlePaperClick() {
    playRound("paper", getComputerChoice());
}

function handleScissorsClick() {
    playRound("scissors", getComputerChoice());
}

const playerOptionsDiv = document.querySelector("#player-options");

const rockBtn = document.createElement("button");
rockBtn.setAttribute("id", "rock-btn");
rockBtn.innerText = "Rock";
rockBtn.addEventListener("click", handleRockClick);
playerOptionsDiv.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.setAttribute("id", "paper-btn");
paperBtn.innerText = "Paper";
paperBtn.addEventListener("click", handlePaperClick);
playerOptionsDiv.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("id", "scissors-btn");
scissorsBtn.innerText = "Scissors";
scissorsBtn.addEventListener("click", handleScissorsClick);
playerOptionsDiv.appendChild(scissorsBtn);

const resultsDiv = document.querySelector("#results");

function playRound(humanChoice, computerChoice) {
        const roundResult = document.createElement("p");
        if (computerChoice == "rock") {
            if (humanChoice == "rock") {
                resultsDiv.appendChild(roundResult).textContent = "Tie!";
            } else if (humanChoice == "paper") {
                resultsDiv.appendChild(roundResult).textContent = "You win! Paper beats Rock.";
                humanScore++;
            } else if (humanChoice == "scissors") {
                resultsDiv.appendChild(roundResult).textContent = "You lose! Rock beats Scissors.";
                computerScore++;
            }
        } else if (computerChoice == "paper") {
            if (humanChoice == "rock") {
                resultsDiv.appendChild(roundResult).textContent = "You lose! Paper beats Rock.";
                computerScore++;
            } else if (humanChoice == "paper") {
                resultsDiv.appendChild(roundResult).textContent = "Tie!";
            } else if (humanChoice == "scissors") {
                resultsDiv.appendChild(roundResult).textContent = "You win! Scissors beats Paper.";
                humanScore++;
            }
        } else if (computerChoice == "scissors") {
            if (humanChoice == "rock") {
                resultsDiv.appendChild(roundResult).textContent = "You win! Rock beats Scissors.";
                humanScore++;
            } else if (humanChoice == "paper") {
                resultsDiv.appendChild(roundResult).textContent = "You lose! Scissors beats Paper.";
                computerScore++;
            } else if (humanChoice == "scissors") {
                resultsDiv.appendChild(roundResult).textContent = "Tie!";
            }
        }

        document.querySelector("#humanScoreboard").innerText = "Human: " + humanScore;
        document.querySelector("#computerScoreboard").innerText = "Computer: " + computerScore;

        if (humanScore == 5 || computerScore == 5) {
            rockBtn.removeEventListener("click", handleRockClick);
            paperBtn.removeEventListener("click", handlePaperClick);
            scissorsBtn.removeEventListener("click", handleScissorsClick);
        if (humanScore == 5) {
            const gameResult = document.createElement("p");
            resultsDiv.appendChild(gameResult).innerText = "Game over! You win!";
        } else {
            const gameResult = document.createElement("p");
            resultsDiv.appendChild(gameResult).innerText = "Game over! You lose!";
        }
    }
}