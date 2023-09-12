export enum LetterState {
  Absent,
  Present,
  Correct,
}

export const colorStatus: { [key: string]: string } = {
  [LetterState.Absent]:
    "dark:bg-gray  bg-gray border-gray dark:text-lightText text-white",
  [LetterState.Present]:
    "dark:bg-yellow bg-yellow border-yellow dark:text-lightText text-white",
  [LetterState.Correct]:
    "dark:bg-green bg-green border-green dark:text-lightText text-white",
};

export type Char = {
  key: string;
  status: LetterState;
};

export interface usedKeys {
  [key: string]: LetterState;
}

export const keyboardKeys: string[][] = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
];
