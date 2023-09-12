const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const roundResult = document.querySelector('.round-result');
const storePlayerScore = document.querySelector('.player-score');
const storeComputerScore = document.querySelector('.computer-score');


let playerScore = 0;
let computerScore = 0;
let gameEnded = false; 

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
    // Convert all user input to lowercase, making it possible for the user to type capital letters
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
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
            'You lose, ' +
            computerSelection +
            ' beats ' +
            lowerCasePlayerSelection
        );
    }
}

// Game function handles scores, results and amount of rounds to play
function game() {
    // Variables for scoring

        
            if (playerScore === 5) {
                const playerGameResult = document.createElement('h3');
                playerGameResult.textContent = 'Well played, you win!';
                container.appendChild(playerGameResult);
                gameEnded = true;
            } else if (computerScore === 5) {
                const computerGameResult = document.createElement('h3');
                computerGameResult.textContent = 'You lose, better luck next time!';
                container.appendChild(computerGameResult);
                gameEnded = true;
            }
          }

    // Event listener to handle player and computer choices.
    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            if (!gameEnded) {
                const playerSelection = button.textContent;
                const computerSelection = getComputerChoice();
                const result = playRound(playerSelection, computerSelection);

                // Update the h3 in index.html with the result
                roundResult.textContent = result;

                // Allocates scores to relevant players
                if (result.includes('win')) {
                    playerScore++;
                    storePlayerScore.textContent = 'Player Score: ' + playerScore;
                } else if (result.includes('lose')) {
                    computerScore++;
                    storeComputerScore.textContent = 'Computer Score: ' + computerScore;
                }
                if (playerScore === 5 || computerScore === 5) {
                    gameEnded = true;
                    game();
                }
            }
        });
    });

// Calls the game function when the page loads
game();