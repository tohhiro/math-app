const ONE_SECOND = 1000;

export const calcTimes = (remainingTime: number) => {
  const minutes = Math.floor(remainingTime / (60 * ONE_SECOND));
  const seconds = Math.floor((remainingTime % (60 * ONE_SECOND)) / ONE_SECOND);
  const milliseconds = remainingTime % ONE_SECOND;

  return {
    minutes,
    seconds,
    milliseconds,
  };
};
