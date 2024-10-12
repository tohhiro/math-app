import { renderHook, act } from '@testing-library/react-hooks';
import { useTimer } from '.';

describe('useTimer', () => {
  const FIVE_MINUTES = 1000 * 60 * 5;
  const ONE_SECOND = 1000;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('スタートされていない場合、タイマーが指定された時間に初期化される', () => {
    const { result } = renderHook(
      () => useTimer({ isStarting: false, onOverTime: jest.fn() }),
      // eslint-disable-next-line function-paren-newline
    );
    expect(result.current.remainingTime).toBe(FIVE_MINUTES);
  });

  test('スタート後1秒経過すると、タイマーも1秒経過になる', () => {
    const { result, rerender } = renderHook(
      ({ isStarting }) => useTimer({ isStarting, onOverTime: jest.fn() }),
      {
        initialProps: { isStarting: false },
      },
    );

    rerender({ isStarting: true });

    act(() => {
      jest.advanceTimersByTime(ONE_SECOND);
    });

    expect(result.current.remainingTime).toBeLessThan(FIVE_MINUTES);
  });

  test('指定された時間が経過sるとコールバック関数が実行される', () => {
    const onOverTime = jest.fn();
    const { rerender } = renderHook(
      ({ isStarting }) => useTimer({ isStarting, onOverTime }),
      {
        initialProps: { isStarting: false },
      },
    );

    rerender({ isStarting: true });

    act(() => {
      jest.advanceTimersByTime(FIVE_MINUTES);
    });

    expect(onOverTime).toHaveBeenCalledTimes(1);
  });

  test('1秒経過後、スタートをリセットするとタイマーもリセットされる', () => {
    const { result, rerender } = renderHook(
      ({ isStarting }) => useTimer({ isStarting, onOverTime: jest.fn() }),
      {
        initialProps: { isStarting: true },
      },
    );

    act(() => {
      jest.advanceTimersByTime(ONE_SECOND);
    });

    rerender({ isStarting: false });

    expect(result.current.remainingTime).toBe(FIVE_MINUTES);
  });
});
