import { LetterInterface } from '../../interfaces';
import Letter from './Letter';

interface Props {
  word: LetterInterface[];
}

const Word = ({ word }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1px',
        flexDirection: 'row',
        justifyContent: 'center',
        // flex: '0 0 40%',
      }}
    >
      {word.map((l: LetterInterface) => (
        <Letter type={l.type}>{l.letter}</Letter>
      ))}
    </div>
  );
};

export default Word;
