import { Shuffle } from '@mui/icons-material';
import ButtonGreen from '../../ButtonGreen';
import TileHolder from '../TileHolder';

interface Props {
  handleWordEnterButton: () => void;
  boardLetters: string[];
  handleOnLetterSelect: (letter: string) => void;
}

const Input = ({
  handleWordEnterButton,
  boardLetters,
  handleOnLetterSelect,
}: Props) => {
  return (
    <>
      {/* TILE HOLDER - This component will hold the tiles. When a letter is sellected a callback function will be called. if letters are added or removed, then we just updated  */}
      <div className="tile-holder">
        <TileHolder
          letters={boardLetters}
          onLetterSelect={handleOnLetterSelect}
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
    </>
  );
};

export default Input;
