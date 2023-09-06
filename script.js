const Player = (name, marker) => {
  return { name, marker };
};

const gameBoard = (() => {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board.push("");
  }
  function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
  function buttonPress() {
    gameController.remainingSpots -= 1;
    removeElementsByClass("X");
    removeElementsByClass("O");
    removeElementsByClass("newDiv");
    removeElementsByClass("btnX");
    removeElementsByClass("btnO");
    displayBoard();
    gameController.checkWinner();
  }
  function displayBoard() {
    let i = 0;
    for (const tile of gameBoard.board) {
      const board = document.querySelector(`.board`);
      const newDiv = document.createElement("div");
      newDiv.classList.add("newDiv");
      board.appendChild(newDiv);
      if (gameBoard.board[i] == "X") {
        const para = document.createElement("p");
        para.classList.add("X");
        para.textContent = gameBoard.board[i];
        newDiv.appendChild(para);
      } else if (gameBoard.board[i] == "O") {
        const para = document.createElement("p");
        para.classList.add("O");
        para.textContent = gameBoard.board[i];
        newDiv.appendChild(para);
      } else {
        const btnX = document.createElement("BUTTON");
        btnX.classList.add("btnX");
        btnX.textContent = "X";
        newDiv.appendChild(btnX);
        const btnO = document.createElement("BUTTON");
        btnO.classList.add("btnO");
        btnO.textContent = "O";
        newDiv.appendChild(btnO);
        const btn = i;
        btnX.addEventListener("click", () => {
          if (gameController.currentPlayer === "p1") {
            gameBoard.board[btn] = "X";
            buttonPress();
            gameController.currentPlayer = "p2";
          }
        });
        btnO.addEventListener("click", () => {
          if (gameController.currentPlayer === "p2") {
            gameBoard.board[btn] = "O";
            buttonPress();
            gameController.currentPlayer = "p1";
          }
        });
      }
      i++;
      if (gameController.remainingSpots < 1) {
        gameController.declareTie();
      }
    }
  }
  return {
    removeElementsByClass,
    displayBoard,
    board,
  };
})();

const gameController = (() => {
  let playerOne = Player("Player One", "X");
  let playerTwo = Player("Player Two", "X");
  let currentPlayer = "p1";
  let winner;

  // Set Constants
  let remainingSpots = 9;

  // winning conditions
  let winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function endGame() {
    gameBoard.removeElementsByClass("btnX");
    gameBoard.removeElementsByClass("btnO");
    gameBoard.removeElementsByClass("gameOverText");
    const scoreboard = document.querySelector(`.scoreboard`);
    const gameOverText = document.createElement("p");
    gameOverText.classList.add("gameOverText");
    if (winner === "X") {
      gameOverText.textContent = `${playerOne.name} is the Winner!`;
    } else if (winner === "O") {
      gameOverText.textContent = `${playerTwo.name} is the Winner!`;
    } else if (winner === "Tie") {
      gameOverText.textContent = `Surprise! It's a Tie!`;
    } else {
      gameOverText.textContent = `Play Below`;
    }
    scoreboard.appendChild(gameOverText);
  }

  function checkWinner() {
    winningOptions.forEach((item) => {
      if (
        gameBoard.board[item[0]] === "X" &&
        gameBoard.board[item[1]] === "X" &&
        gameBoard.board[item[2]] === "X"
      ) {
        winner = "X";
        endGame();
      }
      if (
        gameBoard.board[item[0]] === "O" &&
        gameBoard.board[item[1]] === "O" &&
        gameBoard.board[item[2]] === "O"
      ) {
        winner = "O";
        endGame();
      }
    });
  }

  //declare tie
  function declareTie() {
    winner = "Tie";
    endGame();
  }

  function reset() {
    winner = "";
    endGame();
    remainingSpots = 9;
    currentPlayer = playerOne;
    gameBoard.removeElementsByClass("X");
    gameBoard.removeElementsByClass("O");
    gameBoard.removeElementsByClass("newDiv");
    gameBoard.board = ["", "", "", "", "", "", "", "", ""];
    gameBoard.displayBoard();
  }

  const buttons = document.querySelectorAll(".reset");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      reset();
    });
  });

  return {
    playerOne,
    playerTwo,
    currentPlayer,
    winner,
    remainingSpots,
    winningOptions,
    checkWinner,
    declareTie,
    reset,
  };
})();

gameController;
gameBoard.displayBoard();
