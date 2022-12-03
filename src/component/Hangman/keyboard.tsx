const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled: boolean
}
export function Keyboard({
    activeLetters,
    inactiveLetters,
    addGuessedLetter,
    disabled
}: KeyboardProps) {
    return <div className="keyboard-container">
        {KEYS.map(key => {
            let status = '';
            if(activeLetters.includes(key)) {
                status = 'active';
            } else if(inactiveLetters.includes(key)) {
                status = 'inactive';
            }
            return (
                <button 
                    onClick={() => addGuessedLetter(key)} 
                    className={`keyboard-btn ${status}`} 
                    disabled={status !== '' || disabled}
                    key={key}>
                    {key}
                </button>
            )
        })}
    </div>
};