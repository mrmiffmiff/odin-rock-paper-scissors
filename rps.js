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

/*
*   getHumanChoice will prompt the human player for their choice and will return it if it's valid
*   Inputs: None
*   Output: Human's choice of rock, paper, or scissors
*/
function getHumanChoice() {
    let choice = "";
    do {
        choice = prompt("Rock, paper, or scissors").toLowerCase();
        if (choice != "rock" && choice != "paper" && choice != "scissors") {
            alert("Please enter a valid response");
        }
    } while (choice != "rock" && choice != "paper" && choice != "scissors");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

/*
*   playRound simulates a single round of rock, paper, scissors, incrementing the score as proper
*   Inputs: humanChoice, ComputerChoice
*   Output: None
*/
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) { // tie
        console.log("You tied!")
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) { // human win
        humanScore++;
        console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".");
    }
    else { // computer win
        computerScore++;
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".");
    }
}