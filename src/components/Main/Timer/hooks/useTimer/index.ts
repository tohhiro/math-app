import { useEffect, useState } from 'react';

type Props = {
  isStarting: boolean;
  onOverTime: () => void;
};

export const useTimer = ({ isStarting, onOverTime }: Props) => {
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

  return {
    remainingTime,
  };
};
