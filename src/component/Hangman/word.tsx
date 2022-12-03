type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    gameStatus: number
}
export function HangmanWord({ guessedLetters, wordToGuess, gameStatus }: HangmanWordProps) {
    return <div className="hang-man-word-container">
        {wordToGuess.split("").map((letter, index) => {
            const guessed = guessedLetters.includes(letter);
            const reveal = gameStatus === -1;
            return (
                <span className="hang-man-letter-wrapper" key={index}>
                    <span
                        style={{
                            visibility:
                                guessed || reveal
                                    ? "visible"
                                    : "hidden",
                            color:
                                !guessed && reveal
                                    ? 'red'
                                    : 'black'
                        }}
                    >
                        {letter}
                    </span>
                </span>
            )
        })}
    </div>
};