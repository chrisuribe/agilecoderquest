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

const GameArea = () => {
  const { words } = useWords();
  const [boardWords, setBoardWords] = useState(words);
  const [boardLetters, setBoardLetters] = useState(getLetters(boardWords));
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setBoardWords(words);
  }, [words]);

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
          <ButtonGreen>
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
          <ButtonGreen>
            <Replay fontSize="large" />
          </ButtonGreen>
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
          <ButtonGreen>Enter</ButtonGreen>
        </div>
      </div>
    </div>
  );
};

export default GameArea;
