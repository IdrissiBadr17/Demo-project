import React from "react";

/*
 * Log
 * Props:
 * - turns: array of turn objects in chronological order (most recent first).
 *   each turn: { player: 'X'|'O', square: { row, col } }
 *
 * Renders a simple ordered list describing each move taken during the game.
 */
function Log({ turns, players }) {
  console.log(turns);
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}-${turn.square.col}`}>
          {`${players[turn.player]} (${turn.player})`} selected square (
          {turn.square.row}, {turn.square.col})
        </li>
      ))}
    </ol>
  );
}

export default Log;
