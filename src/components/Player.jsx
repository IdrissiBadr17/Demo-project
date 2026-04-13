import { useState } from "react";

/*
 * Player
 * Props:
 * - initialName: string shown initially for the player
 * - symbol: 'X' or 'O'
 * - isActive: boolean indicating if this player is currently active (for highlighting)
 * - onChangeName(symbol, newName): callback when the player name is saved
 *
 * Behavior:
 * - Shows the player's name and symbol. Clicking "Edit" reveals an input
 *   to change the name; clicking "Save" calls `onChangeName` with the new name.
 */
function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  // Toggle editing state; when leaving edit mode, persist the new name.
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      // Save the name to parent state
      onChangeName(symbol, playerName.trim());
    }
  };

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ?
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            onFocus={(e) => e.target.select()}
            autoFocus
            required
          />
        : <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
