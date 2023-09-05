const Player = (name, piece) => {
  const getPiece = piece;
  const getName = name;
  return { getName, getPiece };
};

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

const gameBoard = (() => {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  function displayBoard() {
    let i = 0;
    for (const row of gameBoard.board) {
      let j = 0;
      for (const tile of row) {
        const row = document.querySelector(`.row-${i}`);
        const column = row.querySelector(`.column-${j}`);
        const para = document.createElement("p");
        if (gameBoard.board[i][j] == "X") {
          para.classList.add("X");
          para.textContent = gameBoard.board[i][j];
          column.appendChild(para);
        } else if (gameBoard.board[i][j] == "O") {
          para.classList.add("O");
          para.textContent = gameBoard.board[i][j];
          column.appendChild(para);
        } else {
          const newDiv = document.createElement("div");
          newDiv.classList.add("newDiv");
          column.appendChild(newDiv);
          const btnX = document.createElement("BUTTON");
          btnX.classList.add("btnX");
          btnX.textContent = "X";
          newDiv.appendChild(btnX);
          const btnO = document.createElement("BUTTON");
          btnO.classList.add("btnO");
          btnO.textContent = "O";
          newDiv.appendChild(btnO);
          const btnRow = i;
          const btnColumn = j;
          btnX.addEventListener("click", () => {
            gameBoard.board[btnRow][btnColumn] = "X";
            console.log(gameBoard.board);
            removeElementsByClass("X");
            removeElementsByClass("O");
            removeElementsByClass("newDiv");
            removeElementsByClass("btnX");
            removeElementsByClass("btnO");
            displayBoard();
          });
          btnO.addEventListener("click", () => {
            gameBoard.board[btnRow][btnColumn] = "O";
            console.log(gameBoard.board);
            removeElementsByClass("X");
            removeElementsByClass("O");
            removeElementsByClass("newDiv");
            removeElementsByClass("btnX");
            removeElementsByClass("btnO");
            displayBoard();
          });
        }
        j++;
      }
      i++;
    }
  }
  return {
    displayBoard,
    board,
  };
})();

const displayController = (() => {})();

gameBoard.displayBoard();
const player1 = Player("Chandler", "X");
const player2 = Player("Kyle", "O");
console.log(player1);
console.log(player2);
