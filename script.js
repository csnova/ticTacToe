const Player = (name, piece) => {
  const getPiece = () => piece;
  const getName = () => name;
  return { getName, getPiece };
};

const gameBoard = (() => {
  const board = [
    ["X", "O", "X"],
    ["0", "X", "O"],
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
      const board = document.querySelector(`.board`);
      const row = document.querySelector(`.row-${i}`);
      const column = document.querySelector(`.column-${j}`);
      const tile = document.createElement("p");
      tile.textContent = gameBoard.board[i][j];
      column.appendChild(tile);
      console.log(i, j);
      console.log(gameBoard.board[i][j]);
      j++;
    }
    i++;
  }
})();

displayController;
// console.table(gameBoard.board[1][2]);
