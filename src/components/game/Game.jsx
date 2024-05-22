import "./Game.css"

import { useState } from "react"

function Game({
    verifyLetter,
    pickedCategory,
    pickedWord,
    letters,
    guessedLetters,
    wrongLetters,
    guess,
    score,
})  {

    const [letter, setLetter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");
    }

    return (
        <>
            <div className="Game">
                <p className="points">
                    <span>Pontuação: {score}</span>
                </p>
                <h1>Adivinhe a palavra:</h1>
                <h3 className="tip">
                    Dica sobre a palavra: <span>{pickedCategory}</span>
                </h3>
                <p>Você ainda tem {guess} tentativas</p>
                <div className="wordContainer">
                    {letters.map((letter, i) =>
                        guessedLetters.includes(letter) ? (
                            <span className="letter" key={i}>
                                {letter}
                            </span>
                        ) : (
                            <span key={i} className="blankSquare"></span>
                        )
                    )}
                </div>
                <div className="letterContainer">
                    <p>Tente adivinha uma letra da palavra:</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        name="letter" 
                        maxLength="1" 
                        required 
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ></input>
                        <button>Jogar</button>
                    </form>
                </div>
                <div className="wrongLettersContainer">
                    <p>Letras já utilizadas:</p>
                    {wrongLetters.map((letter, i) => (
                        <span key={i}>{letter}, </span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Game