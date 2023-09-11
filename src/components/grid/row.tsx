import { FC } from "react";
import { cn } from "@/utils/utils";
import { Char, LetterState } from "@/models/wordle";
import { Cell } from "@/components/grid/cell";

interface RowProps {
  guess?: Char[];
  currentGuess?: string;
}

export const Row: FC<RowProps> = ({ guess, currentGuess }) => {
  const colorStatus = {
    [LetterState.Absent]: "bg-gray border-gray",
    [LetterState.Present]: "bg-yellow border-yellow",
    [LetterState.Correct]: "bg-green border-green",
  };

  if (guess) {
    return (
      <div className="flex text-center justify-center items-center my-1">
        {guess.map((char: Char, index) => {
          const stateStyles =
            char.status == null ? "" : colorStatus[char.status];
          return <Cell key={index} styles={stateStyles} value={char.key} />;
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div className="flex text-center justify-center items-center">
        {letters.map((letter, index) => (
          <Cell key={index} value={letter} />
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <Cell key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className="flex text-center justify-center">
      {[...Array(5)].map((_, index) => (
        <Cell key={index} />
      ))}
    </div>
  );
};
