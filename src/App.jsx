import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {
  deriveCurrentPlayer,
  deriveWinner,
  deriveGameBoard,
} from "./context/contextApi.js";
import GameOver from "./components/GameOver.jsx";
import { PLAYERS } from "./constant/constantsValues.js";

/*
 * App
 * Top-level component that manages the tic-tac-toe game state and composes UI.
 * Key responsibilities:
 * - Maintain `gameTurns` (array of turn objects) and `players` (name map)
 * - Derive the active player, build the board matrix, and determine a winner
 * - Provide handlers passed to child components: selecting squares, rematch, and name changes
 */

// Determine who should play next based on the last turn recorded

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = deriveCurrentPlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    if (winner || hasDraw) return;

    setGameTurns((prevGameTurns) => {
      const activePlayer = deriveCurrentPlayer(prevGameTurns);
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevGameTurns,
      ];
      return updatedGameTurns;
    });
  };

  const handleSelectRematch = () => {
    setGameTurns([]);
  };

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [playerSymbol]: newName,
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={players.O}
            symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            onRestart={handleSelectRematch}
            playerName={players[winner]}
          />
        )}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} players={players} />
    </main>
  );
}

export default App;
