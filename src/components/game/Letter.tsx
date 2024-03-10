import { LetterInterface } from '../../interfaces';

interface Props extends Pick<LetterInterface, 'type'> {
  children?: React.ReactNode;
}

const Letter = ({ children, type }: Props) => {
  const blankStyle = {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    textShadow: '0px 0px 2px #ceac68',
    color: 'white',
  };

  const bonusStyle = {
    backgroundColor: '#f0c459',
    textShadow: '0px 0px 2px #95686a',
    color: 'white',
  };

  const guessedStyle = {
    backgroundColor: 'white',
    textShadow: '0px 0px 2px #d7bfe8',
    color: '#371761',
  };

  const letterStyle =
    type === 'guessed'
      ? guessedStyle
      : type === 'bonus'
      ? bonusStyle
      : blankStyle;

  return (
    <span
      style={{
        border: '1px solid grey',

        height: '40px',
        width: '40px',

        fontSize: '28px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        margin: '1%',
        borderRadius: '3px',
        //   @media only screen and (max-width: 500px) {
        //     font-size: 10px;
        //     height: 30px;
        //     width: 30px;
        //
        ...letterStyle,
      }}
    >
      {type !== 'blank' && children}
    </span>
  );
};

export default Letter;
