//let string = ("RocK");

let string = prompt("Choose your weapon", "")

let playerSelection = string.toLowerCase();
let computerSelection = getComputerChoice();

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

function letRounds (playerSelection, computerSelection) {
if (playerSelection == "rock" && computerSelection === "rock" ||
    playerSelection == "paper" && computerSelection === "paper" ||
    playerSelection == "scissors" && computerSelection === "scissors") {
  return ("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection === "paper") {
    return ("You Lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection === "scissors") {
      return ("You Win! Rock beats Scissors");
    } else if (playerSelection == "paper" && computerSelection === "rock") {
      return ("You Win! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection === "scissors") {
      return ("You Lose! Scissors beat Paper");
    } else if (playerSelection == "scissors" && computerSelection === "rock") {
      return ("You Lose! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection === "paper") {
      return ("You Win! Scissors beat Paper");
  } else {
    console.log("Did not work, try again");
 } 
}
console.log(letRounds(playerSelection, computerSelection));
