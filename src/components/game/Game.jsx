import "./Game.css"

function Game({verifyLetter}) {
    return (
        <>
            <div className="Game">
                <h1>Game</h1>
                <button onClick={verifyLetter}>Encerrar o jogo</button>
            </div>
        </>
    )
}

export default Game