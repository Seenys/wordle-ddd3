import { useState } from "react";
import { Char, LetterState, usedKeys } from "@/models/wordle";
import useStatsModal from "@/hooks/useStatsModal";

const useWordle = (solution: string) => {
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<Char[][]>([...Array(5)]); // each guess is an array
  const [history, setHistory] = useState<string[]>([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [usedKeys, setUsedKeys] = useState<usedKeys>({});

  const statsModal = useStatsModal();

  const formatGuess = (): Char[] => {
    let solutionArray: string[] = [...solution];
    let formattedGuess: Char[] = [...currentGuess].map((char: string): Char => {
      return { key: char, status: LetterState.Absent };
    });

    formattedGuess.forEach((char: Char, index: number): void => {
      if (solutionArray[index] === char.key) {
        formattedGuess[index].status = LetterState.Correct;
        solutionArray[index] = "";
      }
    });

    formattedGuess.forEach((char: Char, index: number): void => {
      if (
        solutionArray.includes(char.key) &&
        char.status !== LetterState.Correct
      ) {
        formattedGuess[index].status = LetterState.Present;
        solutionArray[solutionArray.indexOf(char.key)] = "";
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess: Char[]) => {
    if (currentGuess === solution) setIsCorrect(true);

    setGuesses((prev: Char[][]) => {
      const newGuesses: Char[][] = [...prev];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prev: string[]) => [...prev, currentGuess]);
    setTurn((prev: number) => prev + 1);

    setUsedKeys((prevUsedKeys) => {
      formattedGuess.forEach((l, index) => {
        const resultGuessLetter = prevUsedKeys[l.key];

        if (l.status === LetterState.Correct) {
          prevUsedKeys[l.key] = LetterState.Correct;
          return;
        }
        if (
          l.status === LetterState.Present &&
          resultGuessLetter !== LetterState.Correct
        ) {
          prevUsedKeys[l.key] = LetterState.Present;
          return;
        }
        if (
          l.status === LetterState.Absent &&
          resultGuessLetter !== (LetterState.Correct || LetterState.Present)
        ) {
          prevUsedKeys[l.key] = LetterState.Absent;
          return;
        }
      });

      return prevUsedKeys;
    });
    setCurrentGuess("");
  };

  const handleKeyUp = ({ key }: KeyboardEvent) => {
    validateEnter(key);
  };

  const handleMouseKey = (e: string) => {
    validateEnter(e);
  };

  const validateEnter = (guess: string) => {
    if (guess === "Enter") {
      if (turn >= 5) {
        console.log("you used all your turns");
        statsModal.onOpen("loss");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("you already guessed that");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("guess must be 5 letters");
        return;
      }
      const formatted: Char[] = formatGuess();
      addNewGuess(formatted);
    }
    if (guess === "Backspace") setCurrentGuess((prev) => prev.slice(0, -1));

    if (/^[A-Za-z]$/.test(guess)) {
      if (currentGuess.length < 5) setCurrentGuess((prev) => prev + guess);
    }
  };

  return {
    turn,
    currentGuess,
    handleMouseKey,
    guesses,
    history,
    isCorrect,
    handleKeyUp,
    usedKeys,
  };
};

export default useWordle;
