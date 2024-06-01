import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '.';

describe('ボタンラベルの表示', () => {
  test('ボタンラベルに「Start」と表示される', () => {
    const onClick = jest.fn();
    const mockValues = {
      onClick,
      label: 'Start',
    };
    render(<Button {...mockValues} />);
    const buttonLabel = screen.getByRole('button');
    expect(buttonLabel).toHaveTextContent(mockValues.label);
  });
  test('ボタンラベルに「+」と表示される', () => {
    const onClick = jest.fn();
    const mockValues = {
      onClick,
      label: '+',
    };
    render(<Button {...mockValues} />);
    const buttonLabel = screen.getByRole('button');
    expect(buttonLabel).toHaveTextContent(mockValues.label);
  });
  test('ボタンラベルに「Reset」と表示される', async () => {
    const onClick = jest.fn();
    const mockValues = {
      onClick,
      label: 'Reset',
    };
    render(<Button {...mockValues} />);
    const plusMark = screen.getByRole('button');
    expect(plusMark).toHaveTextContent(mockValues.label);
  });
});
