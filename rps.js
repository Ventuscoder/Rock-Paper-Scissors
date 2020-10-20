// initialize basic variables
const opts = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// This function chooses a random element from the array of moves
function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// This 'helper' function executes a switch statement and gives the result of the two moves
function getResult(playerSelection, computerSelection) {
    // This switch basically checks and compares the moves
    switch (true) {
        case (playerSelection == "rock") && (computerSelection == "paper") :
            computerScore += 1;
            return "You lose! Paper beats rock!";
            break;
        case (playerSelection == "rock") && (computerSelection == "scissors") :
            playerScore += 1;
            return "You win! Rock beats scissors!";
            break;
        case (playerSelection == "paper") && (computerSelection == "scissors") :
            computerScore += 1;
            return "You lose! Scissors beats Paper!";
            break;
        case (playerSelection == "paper") && (computerSelection == "rock") :
            playerScore += 1;
            return "You win! Paper beats Rock!";
            break;
        case (playerSelection == "scissors") && (computerSelection == "rock") :
            computerScore += 1;
            return "You lose! Rock beats Scissors!";
            break;
        case (playerSelection == "scissors") && (computerSelection == "paper") :
            playerScore += 1;
            return "You win! Scissors beats Paper!";
            break;
        default:
            playerScore += 1;
            computerScore += 1;
            return `Draw! Both do ${playerSelection}`;
            break;            
    }
}

// This function plays one single round
function playRound() {
    // This asks for user input in the browser window and converts the text to lowercase
    let playerMove = prompt("Please enter your move:", "e.g. rock, paper, or scissors").toLowerCase();
    let computerMove = computerPlay(opts);
    let result = getResult(playerMove, computerMove);
    console.log(result);
}

// This is the main game function
function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
    // This checks who has won, since a draw is not possible with 5 rounds
    if (computerScore > playerScore) {
        console.log(`That's it! The computer wins by a score of ${computerScore} - ${playerScore}`);
    } else {
        console.log(`That's it! You win by a score of ${playerScore} - ${computerScore}`);
    }
}
