import React from "react";

/*
 * GameOver
 * Props:
 * - onRestart: function to start a new game (called when "Play Again" is clicked)
 * - winner: string 'X' or 'O' when there's a winner, falsy when no winner
 * - playerName: optional friendly name for the winning player
 *
 * Renders a final message (winner or draw) and a button to restart the game.
 */
function GameOver({ onRestart, winner, playerName }) {
  // Render final game UI

  const winnerLabel = winner ? (playerName?.toUpperCase() ?? winner) : null;
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {<p>{winnerLabel ? `${winnerLabel} wins!` : "It's a draw!"}</p>}
      <p>
        <button onClick={onRestart}>Play Again</button>
      </p>
    </div>
  );
}

export default GameOver;
