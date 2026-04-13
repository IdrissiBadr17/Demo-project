import {
  WINNING_COMBINATIONS,
  initialGameBoard,
} from "../constant/constantsValues.js";

const deriveCurrentPlayer = (gameTurns) => {
  return gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
};

const deriveWinner = (gameBoard) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const [firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol] = [
      gameBoard[combination[0].row][combination[0].column],
      gameBoard[combination[1].row][combination[1].column],
      gameBoard[combination[2].row][combination[2].column],
    ];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
      break;
    }
  }
  return winner;
};
const deriveGameBoard = (gameTurns) => {
  let gameBoard = initialGameBoard.map((row) => [...row]);
  gameTurns.forEach((turn) => {
    const { row, col } = turn.square;
    gameBoard[row][col] = turn.player;
  });
  return gameBoard;
};

export { deriveCurrentPlayer, deriveWinner, deriveGameBoard };
