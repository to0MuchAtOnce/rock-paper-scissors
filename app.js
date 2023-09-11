const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');

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
    // Convert all user input to lower case, making it possible for user to type captial letters
    const lowerCasePlayerSelection = String(playerSelection).toLowerCase();
    // Main game logic compares both answers and returns relevant statement
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
        // Returns concatenation of the completed round
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
    // Variables for scoring
    let playerScore = 0;
    let computerScore = 0;
    const results = [];
    // console.log(results);

    // First player to 5 points wins based on the below condition
    while (playerScore && computerScore) {
        // const playerSelection = prompt('Rock, paper or scissors?');
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
    // console.log(
    //     `Final score: Player ${playerScore} - Computer ${computerScore}`
    // );
}
// Event listener to handle player and computer choices.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    console.log('Player:', button.textContent)
    // PlayerSelection is === to the textContent of the button.
    const playerSelection = button.textContent;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const h3 = document.createElement('h3');
    h3.textContent = result;
    container.appendChild(h3);
    });
}); 

// Calls the game function
game();
