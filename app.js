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
      'You win, ' + lowerCasePlayerSelection + 'beats ' + computerSelection
    );
  } else {
    return (
      'You loose, ' + computerSelection + 'beats ' + lowerCasePlayerSelection
    );
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes('win')) {
      playerScore++;
      console.log('Player score:', playerScore);
    } else if (roundResult.includes('loose')) {
      computerScore++;
      console.log('Computer score:', playerScore);
    }
  }

  console.log(`FInal score: Player ${playerScore} - Computer ${computerScore}`);
}

game();
