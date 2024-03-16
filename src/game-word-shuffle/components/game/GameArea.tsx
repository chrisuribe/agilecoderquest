import { useCallback, useEffect, useState } from 'react';
import Timer from './Timer';
import Menu from './Menu';
import { Clear } from '@mui/icons-material';
import ButtonGreen from '../ButtonGreen';
import Information from './Information';
import WordBoard from './WordBoard';

import useWords from '../../hooks/useWords';
import { getLetters, removeOneLetter } from '../../utils';
import ReturnLetterButton from './ReturnButton';
import Input from './Input/Input';
import useKeyboardInput from './useKeyboardInput';
import getLetterPoints from '../../utils/getLetterPoints';

const GameArea = () => {
  const { words, refreshWords } = useWords();
  const [boardWords, setBoardWords] = useState(words);
  const [boardLetters, setBoardLetters] = useState(getLetters(boardWords));
  const [displayText, setDisplayText] = useState('');
  const [percentComplete, setPercentComplete] = useState(0);
  const [points, setPoints] = useState(0);
  const [round, setRound] = useState(1);

  useEffect(() => {
    if (percentComplete === 0 || percentComplete === 100) {
      const newWords = JSON.parse(JSON.stringify(words));
      setBoardWords(newWords);
      if (percentComplete === 100) {
        setRound((round) => round + 1);
      }
    }
  }, [words, percentComplete]);

  useEffect(() => {
    if (percentComplete === 100) {
      refreshWords();
    }
  }, [percentComplete, refreshWords]);

  useEffect(() => {
    const numberOfWordsCompleted = boardWords.reduce((prev, curr) => {
      if (curr.find((l) => l.type === 'guessed')) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    const percentCompleted = (numberOfWordsCompleted / boardWords.length) * 100;
    setPercentComplete(percentCompleted);
  }, [boardWords]);

  const handleLetterReturnButton = useCallback(() => {
    const lastDisplayLetter =
      displayText.length === 0 ? null : displayText[displayText.length - 1];
    if (lastDisplayLetter) {
      // add last displayText letter to boardLetters
      setBoardLetters((boardLetters) => [...boardLetters, lastDisplayLetter]);
      // remove last letter from displayText
      setDisplayText(displayText.slice(0, displayText.length - 1));
    }
  }, [displayText]);

  const handleAllLettersReturnButton = useCallback(() => {
    if (displayText.length !== 0) {
      // add last displayText letter to boardLetters
      setBoardLetters((boardLetters) => [
        ...boardLetters,
        ...displayText.split(''),
      ]);
      // remove all displayText
      setDisplayText('');
    }
  }, [displayText]);

  const handleWordEnterButton = useCallback(() => {
    const stringWordsFromBoardWords = boardWords.map((word) =>
      word.map((w) => w.letter).join(''),
    );

    const validWordSubmissionIndex =
      stringWordsFromBoardWords.indexOf(displayText);

    if (validWordSubmissionIndex >= 0) {
      // update boardWords by updating guessed word's letter type
      const newBoardWords = [...boardWords];
      let pointsGained = 0;
      newBoardWords.forEach((bw) => {
        const combinedWord = bw.map((l) => l.letter).join('');
        if (combinedWord === displayText) {
          bw.forEach((l) => {
            l.type = 'guessed';
            pointsGained += l.letter ? getLetterPoints(l.letter) : 0;
          });
        }
      });

      const newPoints = points + pointsGained;
      setBoardWords(newBoardWords);
      setPoints(newPoints);

      // remove from displayText
      setDisplayText('');
    } else {
      // TODO: turn display text red for 3 seconds and back and forth wiggle to say no.
    }
  }, [boardWords, displayText, points]);

  const handleOnLetterSelect = (letter: string): void => {
    setDisplayText((displayText) => displayText + letter);
    setBoardLetters(removeOneLetter(boardLetters, letter));
  };

  useKeyboardInput(
    handleWordEnterButton,
    handleAllLettersReturnButton,
    handleLetterReturnButton,
    handleOnLetterSelect,
  );

  return (
    <div
      style={{
        height: '97vh',
        display: 'flex',
        fontFamily: 'arial, sans-serif',
        backgroundImage:
          'radial-gradient(60% 400px at 50% 60%,#841bad 5%,#371761 100%)',
        perspective: '500px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* HEADER AREA - This is the area where the menu, round, score, and coundown timer component will go */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '90%',
          margin: '20px',
        }}
      >
        <Menu />
        <div
          style={{
            fontSize: 'x-large',
            color: 'white',
            fontWeight: 'bolder',
          }}
        >
          Round: <span style={{ color: 'orange' }}>{round}</span>
        </div>
        <div
          style={{
            fontSize: 'x-large',
            color: 'white',
            fontWeight: 'bolder',
          }}
        >
          Score: <span style={{ color: 'orange' }}>{points}</span>
        </div>
        <Timer
          timeIsUp={function (): void {
            console.log('Outta time!');
          }}
          pausePressed={function (isRunning: boolean): void {
            console.log(
              'Pause button pressed! Is app currently running?',
              isRunning,
            );
          }}
        ></Timer>
      </div>

      <WordBoard words={boardWords} />

      <Information progress={percentComplete} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ButtonGreen onClick={handleAllLettersReturnButton}>
            <Clear fontSize="large" />
          </ButtonGreen>
        </div>

        <div
          style={{
            backgroundColor: '#23004c',
            borderRadius: '5px',
            padding: '20px',
            fontWeight: '900',
            fontSize: 'xx-large',
            margin: '10px',
            color: 'aliceblue',
            fontFamily: 'Arial, Helvetica, sans-serif',
            textAlign: 'center',
            width: '50vw',
          }}
        >
          {displayText}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ReturnLetterButton onClick={handleLetterReturnButton} />
        </div>
      </div>

      <Input
        handleWordEnterButton={handleWordEnterButton}
        boardLetters={boardLetters}
        handleOnLetterSelect={handleOnLetterSelect}
      />
    </div>
  );
};

export default GameArea;
