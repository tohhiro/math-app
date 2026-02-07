import { render, screen } from '@testing-library/react';
import { StartAndResetButton } from '.';

describe('ボタンラベルの表示', () => {
  const onClick = jest.fn();
  const mockValues = {
    onClick,
  };

  test('ボタンラベルに「Start」と表示される', () => {
    const label = 'Start';
    render(<StartAndResetButton {...mockValues} label={label} />);

    const buttonLabel = screen.getByRole('button');
    expect(buttonLabel).toHaveTextContent(label);
  });

  test('ボタンラベルに「+」と表示される', () => {
    const label = '+';
    render(<StartAndResetButton {...mockValues} label={label} />);

    const buttonLabel = screen.getByRole('button');
    expect(buttonLabel).toHaveTextContent(label);
  });

  test('ボタンラベルに「Reset」と表示される', async () => {
    const label = 'Reset';
    render(<StartAndResetButton {...mockValues} label={label} />);

    const plusMark = screen.getByRole('button');
    expect(plusMark).toHaveTextContent(label);
  });
});
