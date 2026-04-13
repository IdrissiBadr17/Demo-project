Title: App component

Source: [src/App.jsx](src/App.jsx)

Description:

- Top-level React component that manages game state and composes the UI.

Exports:

- `default` — React component `App`.

Key functions and responsibilities:

- `deriveCurrentPlayer(gameTurns)` — Determines active player based on turn history. Returns "X" or "O".
- State: `gameTurns` (array of turns), `players` (object mapping symbols to names).
- Builds `gameBoard` from `gameTurns` and computes `winner` by checking `WINNING_COMBINATIONS`.
- `handleSelectSquare(rowIndex, colIndex)` — Adds a new turn for the active player to `gameTurns`.
- `handleSelectRematch()` — Resets `gameTurns` to start a new game.
- `handlePlayerNameChange(playerSymbol, newName)` — Updates `players` names.

Usage:

- Renders `Player` components, `GameOver` when game ends, `GameBoard` and `Log`.
