import { useCallback, useEffect, useState } from "react";
import words from "@/data/wordList.json";
import '@/assets/app.css';
import { HangmanDrawing } from "@/component/Hangman/drawing";
import { HangmanWord } from "@/component/Hangman/word";
import { Keyboard } from "@/component/Hangman/keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function getGameStatusText(gameStatus: number) {
  if (gameStatus === 0) {
    return "";
  }
  if (gameStatus === 1) {
    return "Winner! - Refresh to try again";
  }
  if (gameStatus === -1) {
    return "Nice Try - Refresh to try again";
  }
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  const getGameStatus = () => {
    if (incorrectLetters.length >= 6) {
      return -1;
    }
    if (wordToGuess.split('').every(letter => guessedLetters.includes(letter))) {
      return 1;
    }
    return 0;
  }

  const gameStatus = getGameStatus();

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || gameStatus !== 0) return;

      setGuessedLetters(currentLetters => [...currentLetters, letter]);

    },
    [guessedLetters, gameStatus]
  );

  useEffect(
    () => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key;
        if (!key.match(/^[a-zA-Z]$/)) return;

        e.preventDefault();
        addGuessedLetter(key.toLowerCase());
      };

      document.addEventListener("keypress", handler);

      return () => {
        document.removeEventListener("keypress", handler);
      };
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter" || gameStatus === 0) return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [gameStatus]);

  return <div className="game-container">
    <div className="game-stats-text">
      {getGameStatusText(gameStatus)}
    </div>
    <HangmanDrawing numberOfGuessed={incorrectLetters.length} />
    <HangmanWord
      gameStatus={gameStatus}
      guessedLetters={guessedLetters}
      wordToGuess={wordToGuess}
    />
    <Keyboard
      disabled={gameStatus !== 0}
      activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
      inactiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}
    />
  </div>;
}

export default App;