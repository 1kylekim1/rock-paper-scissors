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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (computerChoice == "rock") {
            if (humanChoice == "rock") {
                console.log("Tie!");
            } else if (humanChoice == "paper") {
                console.log("You win! Paper beats Rock.");
                humanScore++;
            } else if (humanChoice == "scissors") {
                console.log("You lose! Rock beats Paper.");
                computerScore++;
            }
        } else if (computerChoice == "paper") {
            if (humanChoice == "rock") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            } else if (humanChoice == "paper") {
                console.log("Tie!");
            } else if (humanChoice == "scissors") {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
            }
        } else if (computerChoice == "scissors") {
            if (humanChoice == "rock") {
                console.log("You win! Rock beats Scissors.");
                humanScore++;
            } else if (humanChoice == "paper") {
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
            } else if (humanChoice == "scissors") {
                console.log("Tie!");
            }
        }   
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    }

    console.log("Game over!" + "\n" + "Human: " + humanScore + "\n" + "Computer: " + computerScore + "\n");
}

playGame();