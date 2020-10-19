const opts = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function getResult(playerSelection, computerSelection) {
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
            return "You lose! Scissors beats Paper";
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
            return "You win! Scissors!";
            break;
        default:
            playerscore += 1;
            computerScore += 1;
            return `Draw! Both do ${playerSelection}`;
            break;            
    }
}
function playRound() {
    let playerMove = prompt("Please enter your move:", "e.g. rock, paper, or scissors").toLowerCase();
    let computerMove = computerPlay(opts);
    let result = getResult(playerMove, computerMove);
    console.log(result);
}
function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
    if (computerScore > playerScore) {
        console.log(`That's it! The computer wins by a score of ${computerScore} - ${playerScore}`);
    } else {
        console.log(`That's it! You win by a score of ${playerScore} - ${computerScore}`);
    }
}