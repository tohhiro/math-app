import React, { useEffect, useState } from 'react';
import classes from './index.module.css';

type Props = {
  isStarting: boolean;
  onOverTime: () => void;
};

export const Timer: React.FC<Props> = ({ isStarting, onOverTime }: Props) => {
  const durationInMs = 1000 * 60 * 5; // 5分;

  const [remainingTime, setRemainingTime] = useState(durationInMs);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const updateTimer = () => {
      const currentTime = Date.now();
      const timeLeft = endTime - currentTime;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setRemainingTime(0);
        onOverTime();
      } else {
        setRemainingTime(timeLeft);
      }
    };

    const startTime = Date.now();
    const endTime = startTime + durationInMs;

    if (isStarting) {
      intervalId = setInterval(updateTimer, 10); // 1秒ごとにタイマーを更新
    } else {
      setRemainingTime(durationInMs);
    }

    return () => clearInterval(intervalId); // クリーンアップ時にタイマーの更新を停止
  }, [durationInMs, isStarting]);

  const padZero = (num: number, length: number) =>
    String(num).padStart(length, '0');

  const ONE_SECOND = 1000;
  const minutes = Math.floor(remainingTime / (60 * ONE_SECOND));
  const seconds = Math.floor((remainingTime % (60 * ONE_SECOND)) / ONE_SECOND);
  const milliseconds = remainingTime % ONE_SECOND;

  const showLeftTime = {
    minutes: padZero(minutes, 2),
    seconds: padZero(seconds, 2),
    milliseconds: padZero(milliseconds, 3),
  };

  return (
    <div className={classes.container} data-testid="timer">
      {Object.keys(showLeftTime).map((time, index) => (
        <>
          <span key={`${time}${index}`} className={classes.number}>
            {showLeftTime[time]}
          </span>
          {index < Object.keys(showLeftTime).length - 1 && (
            <span key={`${time}${index}colon`} className={classes.colon}>
              :
            </span>
          )}
        </>
      ))}
    </div>
  );
};
