let wins = 0;
let losses = 0;
let draws = 0;
let userChoice = "";

const choices = document.querySelector(".choices");
const result = document.querySelector(".result");
const results = document.querySelector(".results");
const declare = document.querySelector(".declaration");

declare.textContent = "Make your move: (R)ock, (P)aper, or (S)cissors";

function compMove() {
  const compChoices = ["R", "P", "S"];
  let randChoice = Math.floor(Math.random() * compChoices.length);
  let compChoice = compChoices[randChoice];
  return compChoice
}

function playRound() {
  let compChoice = compMove();
  if (compChoice == "R") {
    choices.textContent = 'Computer came up with the choice of "Rock"';
  }
  else if (compChoice == "P") {
    choices.textContent = 'Computer came up with the choice of "Paper"';
  }
  else if (compChoice == "S") {
    choices.textContent ='Computer came up with the choice of "Scissors"';
  }
  else {
    return
  }
  if (userChoice == compChoice) {
    result.textContent = "It's a draw!";
    draws = draws + 1
  } 
  else if ((userChoice == "R" && compChoice == "P") || (userChoice == "P" && compChoice == "S") || (userChoice == "S" && compChoice == "R")) {
    result.textContent = "You lost miserably.";
    losses = losses + 1
  } 
  else if ((userChoice == "R" && compChoice == "S") || (userChoice == "P" && compChoice == "R") || (userChoice == "S" && compChoice == "P")) {
    result.textContent = "Congratulations! You have won!!!";
    wins = wins + 1
  }
  else {
    return
  }
  results.textContent = `Wins: ${wins} Losses: ${losses} Draws: ${draws}`;
}

window.addEventListener("keydown", function clicking(e) {
  userChoice = `${e.key}`.toUpperCase();
  if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
    playRound();
    if (wins === 5) {
      this.window.removeEventListener("keydown", clicking);
      results.textContent = "WOOHOO!!! YOU HAVE WON THE GAME!"
    }
    if (losses === 5) {
      this.window.removeEventListener("keydown", clicking);
      results.textContent = "Bummer! You have lost the game :("
    }
  }
});

const images = document.querySelector(".images")
images.addEventListener("click", function buttoning(e) {
  let target = e.target.className;
  if (target === "rock") {
    userChoice = "R";
  }
  else if (target === "paper") {
    userChoice = "P";
  }
  else if (target === "scissors") {
    userChoice = "S";
  }
  else {
    return;
  }
  playRound();
  if (wins === 5) {
    images.removeEventListener("click", buttoning);
    results.textContent = "WOOHOO!!! YOU HAVE WON THE GAME!"
  }
  if (losses === 5) {
    images.removeEventListener("click", buttoning);
    results.textContent = "Bummer! You have lost the game :("
  }
});