let humanScore = 0;
let computerScore = 0;

/* 
* Returns a random integer between 0 (inclusive) and the input number (exclusive)
* Inputs: max: Upper bound of return; default of 1 (so result 0 always)
* Output: Random result
*/
function randomInt(max = 1) {
    return Math.floor(Math.random() * max);
}

/* 
*   getComputerChoice randomly returns rock, paper, or scissors
*   Inputs: None
*   Output: Computer's choice as a string
*/
function getComputerChoice() {
    let choiceVal = randomInt(3); // With upper bound of 3, possible outputs are 0, 1, and 2. 3 discreet choices.
    switch (choiceVal) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const gameButtons = document.querySelectorAll(".gameButton");
// Will call a round using the button clicked as the human's choice
gameButtons.forEach((gameButton) => {
    gameButton.addEventListener("click", () => {
        playRound(gameButton.id, getComputerChoice());
    });
});

const resultArea = document.querySelector("#results");

/*
*   playRound simulates a single round of rock, paper, scissors, incrementing the score as proper
*   Inputs: humanChoice, ComputerChoice
*   Output: None
*/
function playRound(humanChoice, computerChoice) {
    const newResult = document.createElement("p");
    if (humanChoice === computerChoice) { // tie
        newResult.textContent = "You tied!";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) { // human win
        humanScore++;
        newResult.textContent = "You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".";
    }
    else { // computer win
        computerScore++;
        newResult.textContent = "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".";
    }
    resultArea.appendChild(newResult);
    updateScoreDisplay();
}

const hScoreDisplay = document.querySelector("#hScore");
const cScoreDisplay = document.querySelector("#cScore");

function updateScoreDisplay() {
    hScoreDisplay.textContent = `Human: ${humanScore}`;
    cScoreDisplay.textContent = `Computer: ${computerScore}`;
    if (humanScore >= 5 || computerScore >= 5) announceWinner();
}

function announceWinner() {
    const finalResult = document.createElement("p");
    if (humanScore >= 5) {
        finalResult.textContent = "Congratulations, you won Rock, Paper, Scissors!";
    }
    else if (computerScore >= 5) {
        finalResult.textContent = "Too bad! You lost Rock, Paper, Scissors!";
    }
    else {
        finalResult.textContent = "There's absolutely no way this text should be displaying and if it is that's weird.";
    }
    resultArea.appendChild(finalResult);
    const resetMessage = document.createElement("p");
    resetMessage.textContent = "Resetting scores...";
    resultArea.appendChild(resetMessage);
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay();
}

// Initialize the score display
updateScoreDisplay();