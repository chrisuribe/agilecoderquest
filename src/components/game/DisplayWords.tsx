interface Props {
  words: string[];
}

const DisplayWords = ({ words }: Props) => {
  return <div>{words?.length && <p>{words.map((w) => w + ' - ')}</p>}</div>;
};

export default DisplayWords;
