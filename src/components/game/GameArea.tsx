import { useState } from 'react';
import TileHolder from './TileHolder';
import Timer from './Timer';
import Menu from './Menu';
// import useWords from '../../hooks/useWords';

const GameArea = () => {
  // const { words } = useWords();
  const [currentLetters] = useState([
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
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* All words:
        <DisplayWords words={words} /> */}

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

      {/* BOARD AREA - this is where completed words, bonus letters, and empty letter slots will go */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          fontSize: 'xx-large',
        }}
      >
        <div>
          <div>☐☐☐</div>
          <div>☐☐☐</div>
          <div>☐☐☐☐</div>
        </div>
        <div>
          <div>☐☐☐☐</div>
          <div>T☐☐☐</div>
          <div>A☐☐☐☐</div>
        </div>
      </div>

      {/* Round Progress Meter - This is where we will show how much progress is needed to get to the next round.  */}
      <div> 25% - 50% - 75% - 100% - Complete </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <div>clear screen button</div>
        <div> screen /_______________________\</div>
        <div>return letter button</div>
      </div>

      {/* TILE HOLDER - This component will hold the tiles. When a letter is sellected a callback function will be called. if letters are added or removed, then we just updated  */}
      <div className="tile-holder">
        <TileHolder
          letters={currentLetters}
          onLetterSelect={function (letter: string): void {
            console.log('selected: ' + letter);
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
        <div style={{ flex: 1, marginLeft: '20px' }}>shuffle tiles button </div>
        <div
          style={{
            flex: 2,
          }}
        >
          enter word button
        </div>
      </div>
    </div>
  );
};

export default GameArea;
