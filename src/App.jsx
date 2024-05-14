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

  console.log(words)

  return (
    <>
      <div className="App">
        {gameStage === 'start' && <Start />}
        {gameStage === 'game' && <Game />}
        {gameStage === 'end' && <End />}
      </div>
    </>
  )
}

export default App
