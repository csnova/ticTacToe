const Player = (name, piece) => {
  const getPiece = () => piece;
  const getName = () => name;
  return { getName, getPiece };
};

const gameBoard = (() => {
  const board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ];
  return {
    board,
  };
})();

const displayController = (() => {
  let i = 0;
  for (const row of gameBoard.board) {
    let j = 0;
    for (const tile of row) {
      const row = document.querySelector(`.row-${i}`);
      const column = row.querySelector(`.column-${j}`);
      const para = document.createElement("p");
      if (gameBoard.board[i][j] == "X") {
        para.classList.add("X");
      } else {
        para.classList.add("O");
      }
      para.textContent = gameBoard.board[i][j];
      column.appendChild(para);
      console.log(i, j);
      console.log(gameBoard.board[i][j]);
      j++;
    }
    i++;
  }
})();

displayController;
