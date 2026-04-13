Title: Log component

Source: [src/components/Log.jsx](src/components/Log.jsx)

Description:

- Presents a chronological list of turns taken in the game.

Props:

- `turns` (array) — array of turn objects; each turn contains `player` and `square` with `row` and `col`.

Behavior:

- Renders an ordered list with one entry per turn: "{player} selected square (row, col)".
