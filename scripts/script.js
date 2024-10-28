let gameStarted = false;
let gameOver = false;

window.onload = function () {
  const boundaries = $$(".boundary");
  const status = $("status");
  const start = $("start");
  const end = $("end");
  const game = $("game");

  function init() {
    addEventListenerToElement(start, "mouseenter", startGame);
    boundaries.forEach((boundary) => {
      addEventListenerToElement(boundary, "mouseenter", hitBoundary);
    });
    addEventListenerToElement(end, "mouseenter", endGame);
    addEventListenerToElement(game, "mouseleave", exitBoundary);
  }

  function startGame() {
    if (gameOver) {
      resetGame();
    }
    gameStarted = true;
    gameOver = false;
    status.innerHTML = "Game started! Don't touch the walls!";

    boundaries.forEach((boundary) => {
      removeClass(boundary, "highlighted");
    });
  }

  function hitBoundary() {
    if (gameStarted && !gameOver) {
      lose();
    }
  }

  function exitBoundary() {
    if (gameStarted && !gameOver) {
      lose();
    }
  }

  function endGame() {
    if (gameStarted && !gameOver) {
      win();
    }
  }

  function lose() {
    gameOver = true;
    gameStarted = false;
    boundaries.forEach((boundary) => {
      addClass(boundary, "highlighted");
    });
    status.innerHTML = "You lost! Move to S to play again";
  }

  function win() {
    gameOver = true;
    gameStarted = false;
    status.innerHTML = "You won! Move to S to play again";
  }

  function resetGame() {
    gameStarted = false;
    gameOver = false;
    boundaries.forEach((boundary) => {
      removeClass(boundary, "highlighted");
    });
    status.innerHTML = 'Begin by moving your mouse over the "S".';
  }

  init();
};
