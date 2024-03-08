import { useState } from 'react';
import TileHolder from './TileHolder';
import useWords from '../../hooks/useWords';

const GameArea = () => {
  const { words } = useWords();
  const [currentLetters, setCurrentLetters] = useState([
    'a',
    'a',
    'b',
    'c',
    'c',
    'd',
    'd',
    'd',
    'd',
    'e',
  ]);
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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* All words:
        <DisplayWords words={words} /> */}

      <div className="tile-holder">
        <TileHolder
          letters={currentLetters}
          onLetterSelect={function (letter: string): void {
            console.log('selected: ' + letter);
          }}
        />
      </div>
    </div>
  );
};

export default GameArea;
