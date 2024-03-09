import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { formatSeconds } from '../../utils';
import { Button } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import ButtonGreen from '../ButtonGreen';

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

    useEffect(() => {
      if (time === 0) {
        timeIsUp();
        return;
      }
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }, [time, timeIsUp]);

    useImperativeHandle(ref, () => ({
      resetTimer() {
        setSeconds(60 * 3); // reset to 3 minutes
      },
      addTime() {
        setSeconds(time + 30); // add 30 seconds
      },
    }));

    const handlePausePressed = () => {
      const isRunning = false; // TODO: i just put false for now, but we need logic to tell if were running or not.... maybe a state variable that can tell if we're in the paused state or not? also is time > 0 ??? something like that.
      pausePressed(isRunning);
      //TODO: add logic to pause time and also
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
          <PauseIcon />
        </ButtonGreen>
      </>
    );
  },
);

export default Timer;
