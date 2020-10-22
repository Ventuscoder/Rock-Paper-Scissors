// intialize basic variables
const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// This function plays a move for the computer
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

// This function plays on round
function playRound() {
    return;
}

// This function plays the game
function game() {
    // This event listener is very clever, because it does not initalize unuseful variables
    moves.forEach(move => {
        document.querySelector(`.${move}`).addEventListener('click', (e) => {
            console.log(e.target);
        });
    });
}

game();