import {
  ReactElement,
  Ref,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { formatSeconds, inputSoundUrl, playSound } from '../../utils';
import PauseIcon from '@mui/icons-material/Pause';
import ButtonGreen from '../ButtonGreen';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { PlayArrow } from '@mui/icons-material';
import { GameContext } from './GameContext';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  // these are callback functions that will be called when time is up or when the pause button is pressed.
  timeIsUp: () => void;
  pausePressed: (isRunning: boolean) => void;
}

export type TimerHandle = {
  resetTimer: () => void;
};

const Timer = forwardRef<TimerHandle, Props>(
  ({ timeIsUp, pausePressed }, ref) => {
    const [time, setSeconds] = useState(60 * 3); // 3 minutes
    const [paused, setPaused] = useState(false);

    const { soundEnabled } = useContext(GameContext);

    useEffect(() => {
      if (time === 0) {
        timeIsUp();
        return;
      }
      const intervalId = setInterval(() => {
        if (!paused) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }, [paused, time, timeIsUp]);

    useImperativeHandle(ref, () => ({
      resetTimer() {
        setSeconds(60 * 3); // reset to 3 minutes
      },
      addTime() {
        setSeconds(time + 30); // add 30 seconds
      },
    }));

    const handlePausePressed = () => {
      pausePressed(paused);
      setPaused(true);
    };

    const handleClose = () => {
      setPaused(false);

      // play sound
      if (soundEnabled) {
        playSound(inputSoundUrl);
      }
    };

    return (
      <>
        <div
          style={{
            fontSize: 'x-large',
            color: 'white',
            fontWeight: 'bolder',
          }}
        >
          Time: <span style={{ color: 'orange' }}>{formatSeconds(time)}</span>
        </div>

        <ButtonGreen onClick={handlePausePressed}>
          <PauseIcon fontSize="large" />
        </ButtonGreen>

        <Dialog
          open={paused}
          TransitionComponent={Transition}
          keepMounted
          fullWidth
          maxWidth="xl"
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          sx={{
            '& .MuiPaper-root': {
              background:
                'radial-gradient(60% 400px at 50% 60%, #841bad 5%, #371761 100%)',
              width: '80%', // 90% of the viewport width
              height: '80%', // 90% of the viewport height

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: 'none', // Override the maxWidth to make sure it can go up to 90%
            },
          }}
        >
          <div>
            <DialogTitle
              style={{
                fontSize: 'x-large',
                color: 'white',
                fontWeight: 'bolder',
                marginBottom: '15px',
              }}
            >
              {'GAME PAUSED'}
            </DialogTitle>
            <DialogContent>
              <ButtonGreen onClick={handleClose}>
                Resume <PlayArrow />
              </ButtonGreen>
            </DialogContent>
          </div>
        </Dialog>
      </>
    );
  },
);

export default Timer;
