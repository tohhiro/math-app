import '@testing-library/jest-dom/extend-expect';
import { createQuestion } from '.';

describe('createQuestion', () => {
  test('4を与えると4桁の数値を作成する', () => {
    const mockValues = 4;
    const question = createQuestion(mockValues);
    // NOTE: 桁の数値を作成するため、文字列に変換してLengthを取得
    expect(question.toString().length).toBe(mockValues);
  });
  test('1を与えると1桁の数値を作成する', () => {
    const mockValues = 1;
    const question = createQuestion(mockValues);
    // NOTE: 桁の数値を作成するため、文字列に変換してLengthを取得
    expect(question.toString().length).toBe(mockValues);
  });
});
