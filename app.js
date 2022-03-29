const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'ROCK'
  }
  if (randomNumber === 2) {
    computerChoice = 'SCISSORS'
  }
  if (randomNumber === 3) {
    computerChoice = 'PAPER'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'ROCK' && userChoice === "PAPER") {
    result = 'You win!'
  }
  if (computerChoice === 'ROCK' && userChoice === "SCISSORS") {
    result = 'You Lost!'
  }
  if (computerChoice === 'PAPER' && userChoice === "SCISSORS") {
    result = 'you win!'
  }
  if (computerChoice === 'PAPER' && userChoice === "ROCK") {
    result = 'you lose!'
  }
  if (computerChoice === 'SCISSORS' && userChoice === "ROCK") {
    result = 'you win!'
  }
  if (computerChoice === 'SCISSORS' && userChoice === "PAPER") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}