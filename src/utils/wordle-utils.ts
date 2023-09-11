import { wordList } from "@/constants/word-list";

export const getRandomWord = (): string => {
  const fiveLettersList: string[] = wordList.filter(
    (word: string): boolean => word.length === 5
  );
  const randomIndex: number = Math.floor(
    Math.random() * fiveLettersList.length
  );
  console.log(fiveLettersList[randomIndex]);
  return fiveLettersList[randomIndex];
};
