const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const roundResult = document.querySelector('.round-result');
const storePlayerScore = document.querySelector('.player-score');
const storeComputerScore = document.querySelector('.computer-score');

// Choice array which stores the values that the computer has to choose from
const choice = ['rock', 'paper', 'scissors'];

// Randomly returns an item from the 'choice' array.
function getComputerChoice() {
    const random = Math.floor(Math.random() * choice.length);
    const computerSelection = choice[random];
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

    // First player to 5 points wins based on the below condition
    while (playerScore < 5 && computerScore < 5) {
        // const playerSelection = prompt('Rock, paper or scissors?');
        const computerSelection = getComputerChoice();
        const roundResult = playRound(computerSelection);
        results.push(roundResult);

        // Allocates scores to relevant players
        if (roundResult.includes('win')) {
            playerScore++;
            results.push('Player score:', playerScore);
            storePlayerScore.textContent = playerScore;
            console.log('round result:', playerScore)
        } else if (roundResult.includes('loose')) {
            computerScore++;
            results.push('Computer score:', playerScore);
            storeComputerScore.textContent = computerScore;
            console.log('computer score', computerScore)
        }
    }
}
// Event listener to handle player and computer choices.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    // PlayerSelection is === to the textContent of the button.
    const playerSelection = button.textContent;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    //Update the h3 in index.html with the result
    roundResult.textContent = result;
    });
}); 

// Calls the game function
game();
