import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number },
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

/*
 * This component will update user with current challenge, progress towards next goal
 */
interface Props {
  progress: number;
}

const Information = ({ progress = 0 }: Props) => {
  return (
    <>
      {/* Round Progress Meter - This is where we will show how much progress is needed to get to the next round.  */}

      {progress === 0 && <span>Lets get started!</span>}
      {progress > 0 && (
        <Box sx={{ width: '80%' }}>
          <LinearProgressWithLabel value={progress} />
        </Box>
      )}
      {progress === 100 && <span>You win! Let's try another round.</span>}
    </>
  );
};

export default Information;
