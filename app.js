// Choice array which stores the values that the computer has to choose from
const choice = ['rock', 'paper', 'scissors'];

// Randomly returns an item from the 'choice' array.
function getComputerChoice() {
  const random = Math.floor(Math.random() * choice.length);
  const computerSelection = choice[random];
  console.log('Computer:', computerSelection);
  return computerSelection;
}

// Play 1 round of the game
function playRound(playerSelection, computerSelection) {
  const lowerCasePlayerSelection = playerSelection.toLowerCase();
  if (lowerCasePlayerSelection === computerSelection) {
    return "It's a draw";
  } else if (
    (lowerCasePlayerSelection === 'rock' && computerSelection === 'scissors') ||
    (lowerCasePlayerSelection === 'paper' && computerSelection === 'rock') ||
    (lowerCasePlayerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return (
      'You win, ' + lowerCasePlayerSelection + ' beats ' + computerSelection
    );
  } else {
    return (
      'You loose, ' + computerSelection + ' beats ' + lowerCasePlayerSelection
    );
  }
}

// Game function
function game() {
  // variables for scoring
  let playerScore = 0;
  let computerScore = 0;
  const results = [];
  console.log(results);

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, paper or scissors?');
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    results.push(roundResult);

    if (roundResult.includes('win')) {
      playerScore++;
      results.push('Player score:', playerScore);
    } else if (roundResult.includes('loose')) {
      computerScore++;
      results.push('Computer score:', playerScore);
    }
  }
  // Log the final results
  console.log(`Final score: Player ${playerScore} - Computer ${computerScore}`);
}

// Calls the game function
game();
