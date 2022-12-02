import { useState } from "react";
import words from "@/data/wordList.json";
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.trunc(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return <h1>{wordToGuess}</h1>;
}

export default App;