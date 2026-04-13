Title: GameOver component

Source: [src/components/GameOver.jsx](src/components/GameOver.jsx)

Description:

- Displays the end-of-game message (winner or draw) and a restart button.

Props:

- `onRestart` (function) — callback invoked when "Play Again" is clicked.
- `winner` (string|null) — winner symbol ("X" or "O") or falsy for no winner.
- `playerName` (string|undefined) — optional display name for the winner.

Behavior:

- Shows "Game Over!" heading; if `winner` is present shows "{playerName} wins!" or "{winner} wins!"; otherwise shows draw message.
- Calls `onRestart` when the button is clicked.
