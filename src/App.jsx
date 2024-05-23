import './App.css';

import { useCallback, useEffect, useState } from 'react';

import { wordList } from './data/words';

import Start from './components/start/Start';
import Game from './components/game/Game';
import End from './components/end/End';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

const guessesQTY = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guess, setGuesses] = useState(guessesQTY);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //Puxando uma categoria aleátoria pelo o indice do objeto Words
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //Puxando uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return { word, category }
  }, [words]);

  const startGame = useCallback(() => {

    clearStates();

    const { word, category } = pickWordAndCategory();

    //criando um array das letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalLetter = letter.toLowerCase();

    // verifica se a letra já foi utilizada, sendo ela certa ou errada
    if (guessedLetters.includes(normalLetter) || wrongLetters.includes(normalLetter)
    ) {
      return;
    }

    if (letters.includes(normalLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }

  //reinicia o jogo
  const retryGame = () => {
    setScore(0);
    setGuesses(guessesQTY);
    setGameStage(stages[0].name);
  }

  const clearStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  //condição de perda
  useEffect(() => {
    if (guess === 0) {
      clearStates();
      setGameStage(stages[2].name)
    }
  }, [guess]);

  //condição de vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
      setScore((actualScore) => actualScore += 10);
      startGame();
    };
  }, [guessedLetters, letters, startGame]);

  return (
    <>
      <div className="App">
        {gameStage === 'start' && <Start startGame={startGame}  />}
        {gameStage === 'game' && (
          <Game
            verifyLetter={verifyLetter}
            retryGame = {retryGame}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guess={guess}
            score={score}
          />
        )}
        {gameStage === 'end' && <End retryGame={retryGame} score={score} />}
      </div>
    </>
  )
}

export default App
