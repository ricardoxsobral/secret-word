import "./End.css"

function End({retryGame}) {
    return(
        <>
            <div className="End">
                <h1>GameOver</h1>
                <button onClick={retryGame}>Resetar o jogo</button>
            </div>
        </>
    )
}

export default End