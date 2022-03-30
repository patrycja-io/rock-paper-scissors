const resultDisplay = document.querySelector("#reslut");
const choicesDisplay = document.querySelector("#choices");
const choices = ["ROCK", "PAPER", "SCISSORS"];

const handleClick = (e) => {
  getResults(
    e.target.innerHTML,
    choices[Math.floor(Math.random() * choices.length)]
  );
};

choices.forEach(choice => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "SCISSORSPAPER":
    case "ROCKSCISSORS":
    case "PAPERROCK":
      resultDisplay.innerHTML =
        "You chose" +
        userChoice +
        "and the computer chose" +
        computerChoice +
        ", so you Win!";
      break;
    case "PAPERSCISSORS":
    case "SCISSORSROCK":
    case "ROCKPAPER":
      resultDisplay.innerHTML =
        "You chose" +
        userChoice +
        "and the computer chose" +
        computerChoice +
        ", so you Lose!";
      break;
    case "PAPERPAPER":
    case "SCISSORSSCISSORS":
    case "ROCKROCK":
      resultDisplay.innerHTML =
        "You chose" +
        userChoice +
        "and the computer chose" +
        computerChoice +
        ", its a draw!";
      break;
  }
}
