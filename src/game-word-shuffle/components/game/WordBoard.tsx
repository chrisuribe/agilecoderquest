import { LetterInterface } from '../../interfaces';
import Word from './Word';

// The word board needs to receive words, but we need to know if each letter is blank, filled, or guessed. That means, letter, bonusLetter, guessedLetter.

interface Props {
  words: LetterInterface[][];
}

const WordBoard = ({ words }: Props) => {
  const column1Words = words.slice(0, 5);
  const column2Words = words.slice(5, 10);

  return (
    <>
      {/* BOARD AREA - this is where completed words, bonus letters, and empty letter slots will go */}
      <div
        style={{
          display: 'flex',
          gap: '40px',
          //fontSize: 'xx-large',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // flexWrap: 'wrap',
            // flex: '0 0 30%',
            justifyContent: 'space-around',
            gap: '10px',
          }}
        >
          {column1Words.map((word, index) => (
            <Word word={word} key={index}></Word>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // flexWrap: 'wrap',
            // flex: '0 0 30%',
            justifyContent: 'space-around',
            gap: '10px',
          }}
        >
          {column2Words.map((word, index) => (
            <Word word={word} key={index}></Word>
          ))}
        </div>
      </div>
    </>
  );
};

export default WordBoard;
