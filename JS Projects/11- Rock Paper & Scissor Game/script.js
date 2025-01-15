function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndexNumber = Math.floor(Math.random() * 3);
  return options[randomIndexNumber];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(playerOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(playerOption, computerResult)) {
    playerScore++;
    return `Player wins! ${playerOption} beats ${computerResult}`;
  } else if (playerOption === computerResult) {
    return `It's a tie! Both chose ${computerResult}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${playerOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(playerOption) {
  //   {
  //   // const computerResult = getRandomComputerResult();
  //   // const roundResultsMessage = getRoundResults(playerOption, computerResult);
  //   // roundResultsMsg.innerText = roundResultsMessage;
  // }
  roundResultsMsg.innerText = getRoundResults(playerOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  //   {
  //   // if (playerScore === 3) {
  //   //   winnerMsgElement.innerText = "Player has won the game!";
  //   //   resetGameBtn.style.display = "block";
  //   //   optionsContainer.style.display = "none";
  //   // } else if (computerScore === 3) {
  //   //   winnerMsgElement.innerText = "Computer has won the game!";
  //   //   resetGameBtn.style.display = "block";
  //   //   optionsContainer.style.display = "none";
  //   // }
  // }

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won game!
    `;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = 0;
  computerScoreSpanElement.innerText = 0;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
