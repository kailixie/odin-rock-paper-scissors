// GAME PLAY

let roundWinner = "";
let computerScore = 0;
let playerScore = 0;
let choice = ["rock", "paper", "scissors"]

// function to get computer selection
function computerPlay() {
    return choice[Math.floor(Math.random() * choice.length)];
}

// play round
function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
      roundWinner = "tie";
        }
        if (playerChoice === "rock") {
          if (computerChoice === "scissors") {
            playerScore++
            roundWinner = "player";
          } else {
            computerScore++
            roundWinner = "computer";
          }
        }
        if (playerChoice === "paper") {
          if (computerChoice === "scissors") {
            computerScore++
            roundWinner = "computer";
          } else {
            playerScore++
            roundWinner = "player";
          }
        }
        if (playerChoice === "scissors") {
          if (computerChoice === "rock") {
            computerScore++
            roundWinner = "computer";
          } else {
            playerScore++
            roundWinner = "player";
          }
        }
    }

// game ends when computer or player reaches 5 wins
function gameOver() {
  return playerScore === 5 || computerScore === 5;
}

// UI

const playerScoreCount = document.getElementById("playerScore")
const computerScoreCount = document.getElementById("computerScore")
const playerAnimation = document.getElementById("playerAnimation")
const computerAnimation = document.getElementById("computerAnimation")
const rockBtn = document.getElementById("rockBtn")
const scissorsBtn = document.getElementById("scissorsBtn")
const paperBtn = document.getElementById("paperBtn")
const gameOverModal = document.getElementById("gameOverModal")
const finalWinner = document.getElementById("finalWinner")
const overlay = document.getElementById("overlay")
const restartBtn = document.getElementById("restartBtn")

rockBtn.addEventListener("click", () => playerChooses("rock"))
scissorsBtn.addEventListener("click", () => playerChooses("scissors"))
paperBtn.addEventListener("click", () => playerChooses("paper"))
restartBtn.addEventListener("click", replay())
overlay.addEventListener("click", closeGameOverModal())

// player chooses weapon
function playerChooses(playerChoice) {
  if (gameOver()) {
    openGameOverModal()
    return
  }

  const computerChoice = computerPlay()
  playRound(playerChoice, computerChoice)
  updateChoices(playerChoice, computerChoice)
  updateScore()

  if (gameOver()) {
    openGameOverModal()
    setEndMessage()
  }
}

function updateChoices(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      playerWeapons.src="/img/leftRock.gif"
      break
    case "scissors":
      playerWeapons.src="/img/leftScissors.gif"
      break
    case "paper":
      playerWeapons.src="/img/leftPaper.gif"
      break
  }

  switch (computerChoice) {
    case "rock":
      computerWeapons.src="/img/rightRock.gif"
      break
    case "scissors":
      computerWeapons.src="/img/rightScissors.gif"
      break
    case "paper":
      computerWeapons.src="/img/rightPaper.gif"
      break
  }
}

function updateScore() {
  playerScoreCount.textContent = `Player: ${playerScore}`
  computerScoreCount.textContent = `Computer: ${computerScore}`
}

function openGameOverModal() {
  gameOverModal.classList.add("active")
  overlay.classList.add("active")
}

function closeGameOverModal() {
  gameOverModal.classList.remove("active")
  overlay.classList.remove("active")
}

function setEndMessage() {
  return playerScore > computerScore
  ? (finalWinner.textContent = "YOU WIN!")
  : (finalWinner.textContent = "YOU LOST!")
}

function replay() {
  playerScore = 0
  computerScore = 0
  playerScoreCount.textContent = "Player: 0"
  computerScoreCount.textContent = "Computer: 0"
  gameOverModal.classList.remove("active")
  overlay.classList.remove("active")
}