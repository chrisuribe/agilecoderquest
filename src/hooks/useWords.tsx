import { useState } from 'react';
import { LetterInterface } from '../interfaces';

const useWords = () => {
  // TODO: get words using WordNik

  //let processedWords: LetterInterface[][];

  // const [allWords, setAllWords] = useState<LetterInterface[][]>(processedWords);

  const friendlyWords = [
    'cat',
    'dog',
    'mom',
    'dad',
    'play',
    'toy',
    'ball',
    'school',
    'friend',
    'book',
    'happy',
    'sad',
    'house',
    'car',
    'bike',
    'tree',
    'flower',
    'sun',
    'rain',
    'snow',
    'apple',
    'banana',
    'orange',
    'milk',
    'cake',
    'bed',
    'bath',
    'shoe',
    'shirt',
    'hat',
    'jump',
    'run',
    'sing',
    'dance',
    'paint',
    'draw',
    'color',
    'zoo',
    'animal',
    'bird',
    'fish',
    'butterfly',
    'bear',
    'elephant',
    'lion',
    'tiger',
    'rabbit',
    'frog',
    'duck',
    'chicken',
  ];

  const defaultWords: LetterInterface[][] = friendlyWords
    .slice(0, 10)
    .map((word) => {
      return word.split('').map((letter) => {
        return { letter, type: 'blank' };
      });
    });

  const [words, setWords] = useState<LetterInterface[][]>(defaultWords);

  const refreshWords = () => {
    const refreshedWords: LetterInterface[][] = friendlyWords
      .slice(11, 21)
      .map((word) => {
        return word.split('').map((letter) => {
          return { letter, type: 'blank' };
        });
      });

    setWords(refreshedWords);
  };

  return { words, refreshWords };
};

export default useWords;
