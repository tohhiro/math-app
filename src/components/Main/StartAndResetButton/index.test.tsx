import { render } from '@testing-library/react';
import { StartAndResetButton } from '.';

describe('ボタンラベルの表示', () => {
  const onClick = jest.fn();
  const mockValues = {
    onClick,
  };

  test('ボタンラベルに「Start」と表示される', () => {
    const label = 'Start';
    const { getByRole } = render(
      <StartAndResetButton {...mockValues} label={label} />,
    );

    const buttonLabel = getByRole('button');
    expect(buttonLabel).toHaveTextContent(label);
  });

  test('ボタンラベルに「+」と表示される', () => {
    const label = '+';
    const { getByRole } = render(
      <StartAndResetButton {...mockValues} label={label} />,
    );

    const buttonLabel = getByRole('button');
    expect(buttonLabel).toHaveTextContent(label);
  });

  test('ボタンラベルに「Reset」と表示される', async () => {
    const label = 'Reset';
    const { getByRole } = render(
      <StartAndResetButton {...mockValues} label={label} />,
    );

    const plusMark = getByRole('button');
    expect(plusMark).toHaveTextContent(label);
  });
});
