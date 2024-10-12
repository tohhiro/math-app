import { calcTimes } from '.';

describe('calcTimes', () => {
  test('1000 * 10 * 60を渡すと、10分ちょうどになる', () => {
    const remainingTime = 1000 * 10 * 60;
    const result = calcTimes(remainingTime);
    expect(result).toEqual({ minutes: 10, seconds: 0, milliseconds: 0 });
  });

  test('999 * 10 * 60を渡すと、10分から1ms少ない値になる', () => {
    const remainingTime = 999 * 10 * 60;
    const result = calcTimes(remainingTime);
    expect(result).toEqual({ minutes: 9, seconds: 59, milliseconds: 400 });
  });
});
