export enum LetterState {
  Absent,
  Present,
  Correct,
}

export const colorStatus: { [key: string]: string } = {
  [LetterState.Absent]: "bg-gray border-gray",
  [LetterState.Present]: "bg-yellow border-yellow",
  [LetterState.Correct]: "bg-green border-green",
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
