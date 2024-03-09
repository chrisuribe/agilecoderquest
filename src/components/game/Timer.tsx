import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { formatSeconds } from '../../utils';
import { Button } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';

interface Props {
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
      pausePressed(time > 0);
    };

    return (
      <>
        <div>Time: {formatSeconds(time)}</div>
        <Button onClick={handlePausePressed}>
          <PauseIcon />
        </Button>
      </>
    );
  },
);

export default Timer;
