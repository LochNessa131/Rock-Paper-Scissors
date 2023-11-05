// let string = ("Rock");
let string = prompt("Choose your weapon", "rock")
let playerSelection = string.toLowerCase();
// let computerSelection = ("scissors");

let computerSelection = getComputerChoice();
let winMatch = ("You Win!");  
let loseMatch = ("You Lose!");
let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice () {
  let randomOutcome = Math.floor(Math.random() * 3);
  if (randomOutcome === 0) {
    return "rock";

  } else if (randomOutcome === 1) {
    return "paper";

  } else if (randomOutcome === 2) {
    return "scissors";
  }
}

function playRound () {
  let computerSelection = getComputerChoice();
if (playerSelection == "rock" && computerSelection === "rock" ||
    playerSelection == "paper" && computerSelection === "paper" ||
    playerSelection == "scissors" && computerSelection === "scissors") {
  return ("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection === "paper") {
      return (`${loseMatch} Paper beats Rock`);
    } else if (playerSelection == "rock" && computerSelection === "scissors") {
      return (`${winMatch} Rock beats Scissors`);
    } else if (playerSelection == "paper" && computerSelection === "rock") {
      return (`${winMatch} Paper beats Rock`);
    } else if (playerSelection == "paper" && computerSelection === "scissors") {
      return (`${loseMatch} Scissors beat Paper`);
    } else if (playerSelection == "scissors" && computerSelection === "rock") {
      return (`${loseMatch} Rock beats Scissors`);
    } else if (playerSelection == "scissors" && computerSelection === "paper") {
      return (`${winMatch} Scissors beat Paper`);
  } else {
    console.log("Did not work, try again");
 } 
}

function game() {
  console.log(playRound());
switch (playRound(playerSelection, computerSelection)) {
  case `${winMatch} Rock beats Scissors`:
  case `${winMatch} Paper beats Rock`:
  case `${winMatch} Scissors beat Paper`:
  return playerCounter++;
  break;
  case `${loseMatch} Rock beats Scissors`:
  case `${loseMatch} Paper beats Rock`:
  case `${loseMatch} Scissors beat Paper`:
return computerCounter++;
  break;
  case "It's a tie!":
  break;
  case playerCounter === 5:
    return ("Winner!");
  break;
  case computerCounter === 5:
    return ("loser!");
  break;
}
}

function fiveGames() {
  game();
  game();
  game();
  game();
  game();
}
fiveGames();