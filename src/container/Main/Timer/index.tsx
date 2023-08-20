import React, { useEffect, useState } from "react";
import classes from "./index.module.css";

type Props = {
  isStarting: boolean;
  onOverTime: () => void;
};

export const Timer: React.FC<Props> = (props: Props) => {
  const { isStarting, onOverTime } = props;

  const durationInMs = 1000 * 60 * 10; // 10分;

  const [remainingTime, setRemainingTime] = useState(durationInMs);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const updateTimer = () => {
      let currentTime = Date.now();
      let timeLeft = endTime - currentTime;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setRemainingTime(0);
        onOverTime();
      } else {
        setRemainingTime(timeLeft);
      }
    };

    let startTime = Date.now();
    let endTime = startTime + durationInMs;

    if (isStarting) {
      intervalId = setInterval(updateTimer, 10); // 1秒ごとにタイマーを更新
    } else {
      setRemainingTime(durationInMs);
    }

    return () => clearInterval(intervalId); // クリーンアップ時にタイマーの更新を停止
  }, [durationInMs, isStarting]);

  const minutes = Math.floor(remainingTime / (60 * 1000));
  const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
  const milliseconds = remainingTime % 1000;

  return (
    <div className={classes.container} data-testid="timer">
      <span className={classes.number}>{String(minutes).padStart(2, "0")}</span>
      <span className={classes.colon}>:</span>
      <span className={classes.number}>{String(seconds).padStart(2, "0")}</span>
      <span className={classes.colon}>:</span>
      <span className={classes.number}>
        {String(milliseconds).padStart(3, "0")}
      </span>
    </div>
  );
};
