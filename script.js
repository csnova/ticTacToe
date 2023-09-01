const Player = (name, piece) => {
  const getPiece = () => piece;
  const getName = () => name;
  return { getName, getPiece };
};

const gameBoard = (() => {
  const a1 = (a) => "X";
  const a2 = (a) => "O";
  const a3 = (a) => "X";
  const b1 = (a) => "X";
  const b2 = (a) => "X";
  const b3 = (a) => "O";
  const c1 = (a) => "O";
  const c2 = (a) => "X";
  const c3 = (a) => "O";
  return {
    a1,
    a2,
    a3,
    b1,
    b2,
    b3,
    c1,
    c2,
    c3,
  };
})();

const displayController = (() => {
  const a1 = "X";
  const a2 = "X";
  return {
    a1,
    a2,
  };
})();

console.log(
  `${gameBoard.a1}, ${gameBoard.a2}, ${gameBoard.a3}, ${gameBoard.b1}, ${gameBoard.b2}, ${gameBoard.b3}, ${gameBoard.c1}, ${gameBoard.c2}, ${gameBoard.c3}`
);
