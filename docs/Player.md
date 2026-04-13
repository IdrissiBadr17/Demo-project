Title: Player component

Source: [src/components/Player.jsx](src/components/Player.jsx)

Description:

- Renders a player's name and symbol; supports inline name editing.

Props:

- `initialName` (string) — initial displayed name.
- `symbol` (string) — player symbol ("X" or "O").
- `isActive` (boolean) — whether the player is currently active (affects CSS class).
- `onChangeName(symbol, newName)` (function) — callback invoked when name editing is saved.

Internal state:

- `isEditing` — whether the name input is visible.
- `playerName` — local input value.

Behavior:

- Clicking "Edit" toggles editing; clicking "Save" calls `onChangeName` with updated name.
