import Player from "./components/Player.jsx";
import GameBoard from "./components/Gameboard.jsx";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
      setActivePlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X');
  }

  return (
    // <h1>React Tic-Tac-Toe</h1>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
            <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
          </ol>

          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>

        Log
      </main>
  )
}

export default App
