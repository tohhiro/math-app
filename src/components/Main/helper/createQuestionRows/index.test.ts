import '@testing-library/jest-dom/extend-expect';
import { createQuestionRows } from '.';

describe('createQuestionRows', () => {
  test('isDefaultValueが真、rowNumberが2の場合、配列要素を2つ生成し、値は----である', () => {
    expect.assertions(5);
    const mockValues = {
      rowNumber: 2,
      isDefaultValue: true,
      digit: 4,
    };

    const question = createQuestionRows(mockValues);

    expect(question.length).toBe(mockValues.rowNumber);
    expect(typeof question[0] === 'string').toBeTruthy();
    expect(typeof question[1] === 'string').toBeTruthy();
    expect(question[0]).toBe('----');
    expect(question[1]).toBe('----');
  });
  test('isDefaultValueが偽、rowNumberが2の場合、配列要素を2つ生成し、値は4桁の数値である', () => {
    expect.assertions(5);
    const mockValues = {
      rowNumber: 2,
      isDefaultValue: false,
      digit: 4,
    };

    const question = createQuestionRows(mockValues);

    expect(question.length).toBe(mockValues.rowNumber);
    expect(typeof question[0] === 'number').toBeTruthy();
    expect(typeof question[1] === 'number').toBeTruthy();
    // NOTE: 桁の数値を作成するため、文字列に変換してLengthを取得
    expect(question[0].toString().length).toBe(mockValues.digit);
    expect(question[1].toString().length).toBe(mockValues.digit);
  });
});
