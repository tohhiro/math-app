import { render, waitFor } from '@testing-library/react';
import { Timer } from '.';

describe('Timer', () => {
  const ONE_SECOND = 1000;

  const mockValues = {
    durationInMs: 1000 * 10 * 60,
    isStarting: false,
    onOverTime: jest.fn(),
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('1000*10*60を渡すと05:00:000が表示される', () => {
    const { getByTestId } = render(<Timer {...mockValues} />);

    const timerLabel = getByTestId('timer');
    expect(timerLabel).toHaveTextContent('05:00:000');
  });

  test('1000*10*60を渡たし、1秒待つと4秒台で表示される', async () => {
    const { getByTestId } = render(<Timer {...mockValues} isStarting />);

    jest.advanceTimersByTime(ONE_SECOND);

    const timerLabel = getByTestId('timer');
    await waitFor(() => expect(timerLabel).toHaveTextContent(/^04:/));
  });
});
