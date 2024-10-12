import { render, screen, waitFor } from '@testing-library/react';
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
    render(<Timer {...mockValues} />);

    const timerLabel = screen.getByTestId('timer');
    expect(timerLabel).toHaveTextContent('05:00:000');
  });

  test('1000*10*60を渡たし、1秒待つと4秒台で表示される', async () => {
    render(<Timer {...mockValues} isStarting />);

    jest.advanceTimersByTime(ONE_SECOND);

    await waitFor(() => {
      const timerLabel = screen.getByTestId('timer');
      expect(timerLabel).toHaveTextContent(/^04:/);
    });
  });
});
