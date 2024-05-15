import './App.css';

import { useCallback, useEffect, useState } from 'react';

import { wordList } from './data/words';

import Start from './components/start/Start';
import Game from './components/game/Game';
import End from './components/end/End';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const startGame = () => {
    setGameStage(stages[1].name);
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const retryGame = () => {
    setGameStage(stages[0].name);
  }

  return (
    <>
      <div className="App">
        {gameStage === 'start' && <Start startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
        {gameStage === 'end' && <End retryGame={retryGame} />}
      </div>
    </>
  )
}

export default App
