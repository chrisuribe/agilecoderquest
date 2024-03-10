import { LetterInterface } from '../interfaces';

export const getLetters = (words: LetterInterface[][]): string[] => {
  const letters = words.flat().map((l) => l.letter || '');
  return letters;
};

export const removeOneLetter = (
  letters: string[],
  letterToRemove: string,
): string[] => {
  const index = letters.indexOf(letterToRemove);
  if (index !== -1) {
    letters.splice(index, 1);
  }
  return letters;
};
