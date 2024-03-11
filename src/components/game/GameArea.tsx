import { useEffect, useState } from 'react';
import TileHolder from './TileHolder';
import Timer from './Timer';
import Menu from './Menu';
import { Clear, Replay, Shuffle } from '@mui/icons-material';
import ButtonGreen from '../ButtonGreen';
import Information from './Information';
import WordBoard from './WordBoard';

import useWords from '../../hooks/useWords';
import { getLetters, removeOneLetter } from '../../utils';
import ReturnLetterButton from './ReturnButton';

const GameArea = () => {
  const { words } = useWords();
  const [boardWords, setBoardWords] = useState(words);
  const [boardLetters, setBoardLetters] = useState(getLetters(boardWords));
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setBoardWords(words);
  }, [words]);

  const handleLetterReturnButton = () => {
    const lastDisplayLetter =
      displayText.length === 0 ? null : displayText[displayText.length - 1];
    if (lastDisplayLetter) {
      // add last displayText letter to boardLetters
      setBoardLetters([...boardLetters, lastDisplayLetter]);
      // remove last letter from displayText
      setDisplayText(displayText.slice(0, displayText.length - 1));
    }
  };

  const handleAllLettersReturnButton = () => {
    if (displayText.length !== 0) {
      // add last displayText letter to boardLetters
      setBoardLetters([...boardLetters, ...displayText.split('')]);
      // remove last letter from displayText
      setDisplayText('');
    }
  };

  const handleWordEnterButton = () => {
    const stringWordsFromBoardWords = boardWords.map((word) =>
      word.map((w) => w.letter).join(''),
    );

    const validWordSubmissionIndex =
      stringWordsFromBoardWords.indexOf(displayText);

    if (validWordSubmissionIndex >= 0) {
      // update boardWords by updating guessed word's letter type
      const newBoardWords = [...boardWords];
      newBoardWords.forEach((bw) => {
        const combinedWord = bw.map((l) => l.letter).join('');
        if (combinedWord === displayText) {
          bw.forEach((l) => (l.type = 'guessed'));
        }
      });
      setBoardWords(newBoardWords);

      // remove from displayText
      setDisplayText('');
    } else {
      // TODO: turn display text red for 3 seconds and back and forth wiggle to say no.
    }
  };

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
          Round: <span style={{ color: 'orange' }}>1</span>
        </div>
        <div
          style={{
            fontSize: 'x-large',
            color: 'white',
            fontWeight: 'bolder',
          }}
        >
          Score: <span style={{ color: 'orange' }}>0</span>
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

      <Information />

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

      {/* TILE HOLDER - This component will hold the tiles. When a letter is sellected a callback function will be called. if letters are added or removed, then we just updated  */}
      <div className="tile-holder">
        <TileHolder
          letters={boardLetters}
          onLetterSelect={function (letter: string): void {
            setDisplayText(displayText + letter);
            setBoardLetters(removeOneLetter(boardLetters, letter));
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          margin: '20px',
        }}
      >
        <div style={{ flex: 1, marginLeft: '20px' }}>
          <ButtonGreen>
            <Shuffle fontSize="large" />
          </ButtonGreen>{' '}
        </div>
        <div
          style={{
            flex: 2,
          }}
        >
          <ButtonGreen onClick={handleWordEnterButton}>Enter</ButtonGreen>
        </div>
      </div>
    </div>
  );
};

export default GameArea;
