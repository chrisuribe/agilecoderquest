import { Button } from '@mui/material';
import getLetterPoints from '../../utils/getLetterPoints';
import MakeDraggable from '../MakeDraggable';
import { LegacyRef, useRef } from 'react';
import { LegacyCharacterEncoding } from 'crypto';

interface Props {
  letters: string[];
  onLetterSelect: (letter: string) => void;
}

interface HolderTile {
  letter: string;
  points: number;
  available: number;
}

/*
 * Hold letters and sends slected letters to callback function.
 */
const TileHolder = ({ letters, onLetterSelect }: Props) => {
  /*
   * Convert single letters to HolderTiles. No repeats.
   */
  const lettersToHolderTiles = (letters: string[]): HolderTile[] => {
    const lettersWithPointsObject = letters.reduce<Record<string, HolderTile>>(
      (acc, letter) => {
        if (acc[letter]) {
          acc[letter].available += 1;
        } else {
          acc[letter] = {
            letter,
            points: getLetterPoints(letter),
            available: 1,
          };
        }
        return acc;
      },
      {},
    );

    return Object.values(lettersWithPointsObject);
  };

  const holderTiles = lettersToHolderTiles(letters);

  return (
    <div>
      {holderTiles.map((l) => (
        <>
          <MakeDraggable key={l.letter + l.points}>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                margin: '5px',
              }}
              className="tile"
            >
              <Button
                key={l.letter}
                sx={{
                  background:
                    'linear-gradient(180deg, #FEDA75 30%, #DB904A 90%)',
                  borderRadius: 3,
                  border: 0,
                  color: 'white',
                  width: '50px', // Set square dimensions
                  height: '55px', // Set square dimensions
                  fontSize: 'x-large',
                  fontWeight: 900,
                  boxShadow:
                    '0px 8px 0px 0px #ac5942, 0px -1px 0px 0px #FFFFFF',
                  textShadow: '0px 0px 2px #CEAC68',
                  display: 'flex',
                  justifyContent: 'center', // Center content horizontally
                  alignItems: 'center', // Center content vertically
                  padding: 0, // Adjust padding as needed
                }}
                onClick={() => onLetterSelect(l.letter)}
              >
                <span
                  style={{
                    position: 'relative',
                    top: '-2.5px',
                  }}
                >
                  {l.letter}
                  <span
                    style={{
                      fontSize: 'small',
                      position: 'relative',
                      top: '2px',
                      right: '-2px',
                    }}
                  >
                    <sub>{l.points}</sub>
                  </span>
                </span>
              </Button>
              <span
                style={{
                  fontSize: 'small',
                  position: 'absolute', // Changed to absolute
                  bottom: '-4px', // Align to the bottom
                  right: '-5px', // Align to the right
                  background: 'red', // Circle's background color
                  borderRadius: '50%', // Creates a circular shape
                  width: '20px', // Width of the circle
                  height: '20px', // Height of the circle (same as width for a perfect circle)
                  color: 'white', // Letter color
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <sub>{l.available}</sub>
              </span>
            </div>
          </MakeDraggable>
        </>
      ))}
    </div>
  );
};

export default TileHolder;
