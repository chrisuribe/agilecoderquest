import { useState } from 'react';

const useWords = () => {
  // TODO: get words using WordNik

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
  const [words, setWords] = useState<string[]>(friendlyWords);

  return { words };
};

export default useWords;
