const buttons = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const computerScoreNum = document.querySelector(".computer-score-num");
const resetBtn = document.querySelector(".play-again-btn");
const roundResult = document.querySelector(".round-result");
const storePlayerScore = document.querySelector(".player-score");
const storeComputerScore = document.querySelector(".computer-score");
const playerScoreNum = document.querySelector(".player-score-num");
const modal = document.querySelector(".modal");
const infoIcon = document.querySelector(".ph-info");
const crossIcon = document.querySelector(".ph-x-circle");

const computerGameResult = document.createElement("h3");
const playerGameResult = document.createElement("h3");

let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

// Choice array which stores the values that the computer has to choose from
const choice = ["👊", "🫱", "✌️"];

// Randomly returns an item from the 'choice' array.
function getComputerChoice() {
  const random = Math.floor(Math.random() * choice.length);
  const computerSelection = choice[random];
  return computerSelection;
}

const emojiToWord = {
  "👊": "rock",
  "🫱": "paper",
  "✌️": "scissors",
};

function playRound(playerSelection, computerSelection) {
  const lowerCasePlayerSelection = playerSelection.toLowerCase();
  const playerChoiceWord = emojiToWord[lowerCasePlayerSelection];
  const computerChoiceWord = emojiToWord[computerSelection];

  if (lowerCasePlayerSelection === computerSelection) {
    return "It's a draw";
  } else if (
    (lowerCasePlayerSelection === "👊" && computerSelection === "✌️") ||
    (lowerCasePlayerSelection === "🫱" && computerSelection === "👊") ||
    (lowerCasePlayerSelection === "✌️" && computerSelection === "🫱")
  ) {
    // Returns concatenation of the completed round as template literals
    return `You win, ${playerChoiceWord} beats ${computerChoiceWord}`;
  } else {
    return `You lose, ${computerChoiceWord} beats ${playerChoiceWord}`;
  }
}

// Game function handles scores, results and amount of rounds to play
function game() {
  if (playerScore === 5) {
    playerGameResult.textContent = "Well played, you win!";
    container.appendChild(playerGameResult);
    gameEnded = true;
    resetBtn.classList.remove("hidden");
    resetBtn.style.visibility = "visible";
    // playerScoreNum.textContent = playerScore;
  } else if (computerScore === 5) {
    computerGameResult.textContent = "You lose, better luck next time!";
    container.appendChild(computerGameResult);
    gameEnded = true;
    resetBtn.classList.remove("hidden");
    resetBtn.style.visibility = "visible";
    // computerScoreNum.textContent = playerScore;
  }
}

infoIcon.addEventListener("click", () => {
  modal.style.display = "block";
});

crossIcon.addEventListener("click", () => {
  modal.style.display = "none";
});

// Resets scores to 0 and unappends game ended message
resetBtn.addEventListener("click", () => {
  if (gameEnded) {
    playerScore = 0;
    computerScore = 0;
    playerScoreNum.textContent = playerScore;
    computerScoreNum.textContent = computerScore;

    if (playerGameResult && playerGameResult.parentNode) {
      playerGameResult.parentNode.removeChild(playerGameResult);
    }

    if (computerGameResult && computerGameResult.parentNode) {
      computerGameResult.parentNode.removeChild(computerGameResult);
    }
    gameEnded = false;
    resetBtn.classList.add("hidden");
    resetBtn.style.visibility = "hidden";
  }
});

// Handles player and computer choices.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!gameEnded) {
      const playerSelection = button.textContent;
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);

      // Update the h3 in index.html with the result
      roundResult.textContent = result;

      // Allocates scores to relevant players
      if (result.includes("win")) {
        playerScore++;
        playerScoreNum.textContent = playerScore;
      } else if (result.includes("lose")) {
        computerScore++;
        computerScoreNum.textContent = computerScore;
      }
      if (playerScore === 5 || computerScore === 5) {
        gameEnded = true;
        game();
      }
    }
  });
});
game();
