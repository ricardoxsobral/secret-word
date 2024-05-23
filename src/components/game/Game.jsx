import "./Game.css"

import { useState, useRef } from "react"

function Game({
    verifyLetter,
    retryGame,
    pickedCategory,
    pickedWord,
    letters,
    guessedLetters,
    wrongLetters,
    guess,
    score,
}) {

    const [letter, setLetter] = useState("");
    const letterRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");
        letterRef.current.focus();
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
                <div className="textLetter">
                    <p>Tente adivinha uma letra da palavra:</p>
                </div>
                <div className="lettersAndOut">
                    <div className="letterContainer">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="letter"
                                maxLength="1"
                                required
                                onChange={(e) => setLetter(e.target.value)}
                                value={letter}
                                ref={letterRef}
                            ></input>
                            <button>Jogar</button>
                        </form>
                    </div>
                    <div className="surrender">
                        <button onClick={retryGame}>Sair</button>
                    </div>
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