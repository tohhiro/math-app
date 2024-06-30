import React, { memo } from 'react';
import classes from './index.module.css';
import { useTimer } from './hooks/useTimer';

type Props = {
  isStarting: boolean;
  onOverTime: () => void;
};

const ONE_SECOND = 1000;

const padZero = (num: number, length: number) =>
  String(num).padStart(length, '0');

export const Timer: React.FC<Props> = memo(
  ({ isStarting, onOverTime }: Props) => {
    const { remainingTime } = useTimer({ isStarting, onOverTime });

    const minutes = Math.floor(remainingTime / (60 * ONE_SECOND));
    const seconds = Math.floor(
      (remainingTime % (60 * ONE_SECOND)) / ONE_SECOND,
    );
    const milliseconds = remainingTime % ONE_SECOND;

    const showLeftTime: { [key: string]: string } = {
      minutes: padZero(minutes, 2),
      seconds: padZero(seconds, 2),
      milliseconds: padZero(milliseconds, 3),
    };

    return (
      <div className={classes.container} data-testid="timer">
        {Object.keys(showLeftTime).map((time, index) => (
          <>
            <span key={time} className={classes.number}>
              {showLeftTime[time]}
            </span>
            {index < Object.keys(showLeftTime).length - 1 && (
              <span className={classes.colon}>:</span>
            )}
          </>
        ))}
      </div>
    );
  },
);

Timer.displayName = 'Timer';
