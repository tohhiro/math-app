import { createQuestion } from '.';

describe('createQuestion', () => {
  test('4を与えると4桁の数値を作成する', () => {
    const DUMMY_DIGIT_NUMBER = 4;
    const question = createQuestion(DUMMY_DIGIT_NUMBER);
    // NOTE: 桁の数値を作成するため、文字列に変換してLengthを取得
    expect(question.toString().length).toBe(DUMMY_DIGIT_NUMBER);
  });
  test('1を与えると1桁の数値を作成する', () => {
    const DUMMY_DIGIT_NUMBER = 1;
    const question = createQuestion(DUMMY_DIGIT_NUMBER);
    // NOTE: 桁の数値を作成するため、文字列に変換してLengthを取得
    expect(question.toString().length).toBe(DUMMY_DIGIT_NUMBER);
  });
});
