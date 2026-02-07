import { padZero } from '.';

describe('padZero', () => {
  test.each([
    { num: 1, length: 2, expected: '01' },
    { num: 10, length: 2, expected: '10' },
    { num: 100, length: 2, expected: '100' },
    { num: 1, length: 3, expected: '001' },
    { num: 10, length: 3, expected: '010' },
    { num: 100, length: 3, expected: '100' },
  ])(
    '$numを$length桁にパディングすると$expectedになる',
    ({ num, length, expected }) => {
      expect(padZero(num, length)).toBe(expected);
    },
  );
});
