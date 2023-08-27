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
    // convert all user input to lower case, making it possible for user to type captial letters
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    if (lowerCasePlayerSelection === computerSelection) {
        return "It's a draw";
    } else if (
        (lowerCasePlayerSelection === 'rock' &&
            computerSelection === 'scissors') ||
        (lowerCasePlayerSelection === 'paper' &&
            computerSelection === 'rock') ||
        (lowerCasePlayerSelection === 'scissors' &&
            computerSelection === 'paper')
    ) {
        return (
            'You win, ' +
            lowerCasePlayerSelection +
            ' beats ' +
            computerSelection
        );
    } else {
        return (
            'You loose, ' +
            computerSelection +
            ' beats ' +
            lowerCasePlayerSelection
        );
    }
}

// Game function handles scores, results and amount of rounds to play
function game() {
    // variables for scoring
    let playerScore = 0;
    let computerScore = 0;
    const results = [];
    console.log(results);

    // First player to 5 points wins based on the below condition
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt('Rock, paper or scissors?');
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        results.push(roundResult);

        // Allocates scores to relevant players
        if (roundResult.includes('win')) {
            playerScore++;
            results.push('Player score:', playerScore);
        } else if (roundResult.includes('loose')) {
            computerScore++;
            results.push('Computer score:', playerScore);
        }
    }
    // Log the final results
    console.log(
        `Final score: Player ${playerScore} - Computer ${computerScore}`
    );
}

// Calls the game function
game();
