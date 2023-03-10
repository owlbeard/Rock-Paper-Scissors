console.log("Welcome to Rock-Paper-Scissors");
console.log("The rules are:");
console.log("1)Rock demolishes scissors.");
console.log("2)Paper suffocates rock.");
console.log("3)Scissors mutilate paper.");

let wins = 0;
let losses = 0;
let draws = 0;


while (true) {
  console.log(`Wins: ${wins} Losses: ${losses} Draws: ${draws}`);
  console.log("Make your move: (R)ock, (P)aper, (S)cissors, or (E)xit");
  let userChoice = prompt().toUpperCase();
  let compChoices = ["R", "P", "S"];
  let randChoice = Math.floor(Math.random() * compChoices.length);
  let compChoice = compChoices[randChoice];


  if (compChoice == "R") {
    console.log('Computer came up with the choice of "Rock"');
  }
  else if (compChoice == "P") {
    console.log('Computer came up with the choice of "Paper"');
  }
  else if (compChoice == "S") {
    console.log('Computer came up with the choice of "Scissors"');
  }

  if (userChoice == compChoice) {
    console.log(`The computer came up with: ${compChoice}`);
    console.log("It's a draw!");
    draws = draws + 1
  } 
  else if ((userChoice == "R" && compChoice == "P") || (userChoice == "P" && compChoice == "S") || (userChoice == "S" && compChoice == "R")) {
    console.log(`The computer came up with: ${compChoice}`);
    console.log("You lost miserably.");
    losses = losses + 1
  } 
  else if ((userChoice == "R" && compChoice == "S") || (userChoice == "P" && compChoice == "R") || (userChoice == "S" && compChoice == "P")) {
    console.log(`The computer came up with: ${compChoice}`);
    console.log("Congratulations! You have won!!!");
    wins = wins + 1
  }
  else if (userChoice == "E" || userChoice == "e") {
    throw Error("So you have chosen the death of me :(");
  }
  else {
    console.log("Please press either: (R)ock, (P)aper, (S)cissors, or (E)xit");
  }
}