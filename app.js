const choice = ['rock', 'paper', 'scissors'];

// Randomly returns an item from the 'choice' array.
function getComputerChoice() {
  const random = Math.floor(Math.random() * choice.length);
  console.log(random, choice[random]);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Its a draw!';
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
