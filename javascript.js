function getComputerChoice () {

  let randomOutcome = Math.floor(Math.random() * 3);

  if (randomOutcome === 0) {
    console.log("Rock");

  } else if (randomOutcome === 1) {
    console.log("Paper");

  } else if (randomOutcome === 2) {
    console.log("Scissors");
  }
}
