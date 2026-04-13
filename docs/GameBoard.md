Title: GameBoard component

Source: [src/components/GameBoard.jsx](src/components/GameBoard.jsx)

Description:

- Stateless component that renders the tic-tac-toe board and square buttons.

Props:

- `board` (array) — 2D array representing the board rows and columns.
- `onSelectSquare(rowIndex, colIndex)` (function) — called when a square button is clicked.

Behavior:

- Renders nested ordered lists for rows and columns; each square is a `button`.
- Buttons are disabled when the square value is not an empty string.
