import "./End.css"

function End({retryGame, score}) {
    return(
        <>
            <div className="End">
                <h1>Fim de Jogo!</h1>
                <h2>Sua Pontuação foi de {score} pontos</h2>
                <button onClick={retryGame}>Resetar o jogo</button>
            </div>
        </>
    )
}

export default End