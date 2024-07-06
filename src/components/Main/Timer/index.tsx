import React, { memo } from 'react';
import classes from './index.module.css';
import { useTimer } from './hooks/useTimer';
import { padZero } from './helper/padZero';
import { calcTimes } from './helper/calcTimes';

type Props = {
  isStarting: boolean;
  onOverTime: () => void;
};

export const Timer: React.FC<Props> = memo(
  ({ isStarting, onOverTime }: Props) => {
    const { remainingTime } = useTimer({ isStarting, onOverTime });

    const { minutes, seconds, milliseconds } = calcTimes(remainingTime);

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
