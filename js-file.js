let choice = ["rock", "paper", "scissors"]

let rounds = 0;
let computerScore = 0;
let playerScore = 0;

function computerPlay(choice) {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerChoice){
    let playerChoice = playerSelection.toLowerCase()
    computerChoice = computerPlay(choice)
    if (playerChoice === computerChoice) {
          return "It is a tie!";
        }
        if (playerChoice === "rock") {
          if (computerChoice === "scissors") {
            playerScore++
            return "Player Wins! Rock beats scissors!";
          } else {
            computerScore++
            return "Computer Wins! Paper beats rock!";
          }
        }
        if (playerChoice === "paper") {
          if (computerChoice === "scissors") {
            computerScore++
            return "Computer Wins! Scissors beat paper!";
          } else {
            playerScore++
            return ("Player Wins! Paper beats rock!");
          }
        }
        if (playerChoice === "scissors") {
          if (computerChoice === "rock") {
            computerScore++
            return "Computer Wins! Rock beats scissors!";
          } else {
            playerScore++
            return ("Player Wins! Scissors beat paper!");
          }
        }
    }

//function game() {
//    for(let rounds = 1; rounds < 5; rounds++) {
//        let playerSelection = prompt("ROCK, PAPER, or SCISSORS?")
//        console.log(playRound(playerSelection))
//        console.log("Player: ", playerScore, "Computer: ", computerScore)
//    }
//    if (playerScore > computerScore) {
//        return "PLAYER WINS!";
//    }
//    else if (playerScore < computerScore) {
//        return "COMPUTER WINS!";
//    }
//    else {
//        return "TIE!";
//    }
//}

console.log(game());