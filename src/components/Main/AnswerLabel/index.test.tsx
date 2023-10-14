import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AnswerLabel } from '.';

describe('AnswerLabel', () => {
  test('Answerラベルの文字列がAnswer（3）である', () => {
    const mockValues = {
      answer: 123,
      count: 3,
    };
    render(<AnswerLabel {...mockValues} />);
    const answerLabel = screen.getByRole('label');
    expect(answerLabel).toHaveTextContent(`Answer（${mockValues.count}）`);
  });
  test('Answerが123である', () => {
    const mockValues = {
      answer: 123,
      count: 3,
    };
    render(<AnswerLabel {...mockValues} />);
    const answerLabel = screen.getByTestId('answer');
    expect(answerLabel).toHaveTextContent(String(mockValues.answer));
  });
});
