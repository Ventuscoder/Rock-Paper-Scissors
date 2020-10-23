// intialize basic variables
const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let gameOn = true;
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
            return ["You lose! Paper beats rock!", 'red'];
            break;
        case (playerSelection == "rock") && (computerSelection == "scissors") :
            playerScore += 1;
            return ["You win! Rock beats scissors!", 'green'];
            break;
        case (playerSelection == "paper") && (computerSelection == "scissors") :
            computerScore += 1;
            return ["You lose! Scissors beats Paper!", 'red'];
            break;
        case (playerSelection == "paper") && (computerSelection == "rock") :
            playerScore += 1;
            return ["You win! Paper beats Rock!", 'green'];
            break;
        case (playerSelection == "scissors") && (computerSelection == "rock") :
            computerScore += 1;
            return ["You lose! Rock beats Scissors!", 'red'];
            break;
        case (playerSelection == "scissors") && (computerSelection == "paper") :
            playerScore += 1;
            return ["You win! Scissors beats Paper!", 'green'];
            break;
        default:
            playerScore += 1;
            computerScore += 1;
            return [`Draw! Both do ${playerSelection}`, 'grey'];
            break;            
    }
}

// This function plays on round
function playRound(playerMove, computerMove=computerPlay(moves)) {
    const statusBar = document.querySelector('.status');
    let result = getResult(playerMove, computerMove);
    if (computerScore == 5) {
        document.querySelector('.status').textContent = `The computer has won by a score of ${computerScore} - ${playerScore}!`;
        document.querySelector('.player-score').textContent = 0;
        document.querySelector('.comp-score').textContent = 0;
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore == 5) {
        document.querySelector('.status').textContent = `'You have won by a score of ${playerScore} - ${computerScore}!`;
        document.querySelector('.player-score').textContent = 0;
        document.querySelector('.comp-score').textContent = 0;
        playerScore = 0;
        computerScore = 0;
    } else {
        if (result[1] == 'green') {
            statusBar.textContent = result[0];
            statusBar.style.color = result[1];
        } else {
            statusBar.textContent = result[0];
            statusBar.style.color = result[1];
        }
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.comp-score').textContent = computerScore;
    }
}

function game() {
    moves.forEach(move => {
        document.querySelector(`.${move}`).addEventListener('click', function(){
            playRound(move);
        });
    });
}

game();