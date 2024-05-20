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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedLetter, setPickedLetter] = useState([]);

  const pickWordAndCategory = () => {
    //Puxando uma categoria aleátoria pelo o indice do objeto Words
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    //Puxando uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word);
    return { word, category }
  }

  const startGame = () => {
    const {word, category} = pickWordAndCategory();
    

    //criando um array das letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    

    console.log(word, category)
    console.log(wordLetters)

    setPickedWord(word);
    setPickedCategory(category);
    setPickedLetter(wordLetters);

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
