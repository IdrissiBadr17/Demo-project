/*
 * GameBoard
 * Props:
 * - board: 2D array representing rows and columns of the board
 * - onSelectSquare(rowIndex, colIndex): callback when a square is clicked
 *
 * This is a presentational component: it renders the board as nested
 * ordered lists and delegates click handling to the parent via
 * `onSelectSquare`.
 */
export default function GameBoard({ onSelectSquare, board }) {
  // (Old experimental state-handling code is left commented for reference.)

  // Render the board: rows -> columns -> buttons for each square.
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  // Disable button if square already contains a symbol
                  disabled={col !== ""}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
