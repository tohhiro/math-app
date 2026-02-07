export const createQuestion = (digit: number) => {
  const num = 10;
  const fourDigitNumber = Math.floor(Math.random() * num ** digit)
    .toString()
    .padEnd(digit, '0');
  return Number(fourDigitNumber);
};
