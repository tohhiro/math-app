import { renderHook, act } from '@testing-library/react-hooks';
import { useTimer } from '.';

jest.useFakeTimers();

describe('useTimer', () => {
  it('スタートされていない場合、タイマーが指定された時間に初期化される', () => {
    const { result } = renderHook(
      () => useTimer({ isStarting: false, onOverTime: jest.fn() }),
      // eslint-disable-next-line function-paren-newline
    );
    expect(result.current.remainingTime).toBe(1000 * 60 * 5);
  });

  it('スタート後1秒経過すると、タイマーも1秒経過になる', () => {
    const { result, rerender } = renderHook(
      ({ isStarting }) => useTimer({ isStarting, onOverTime: jest.fn() }),
      {
        initialProps: { isStarting: false },
      },
    );

    rerender({ isStarting: true });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.remainingTime).toBeLessThan(1000 * 60 * 5);
  });

  it('指定された時間が経過sるとコールバック関数が実行される', () => {
    const onOverTime = jest.fn();
    const { rerender } = renderHook(
      ({ isStarting }) => useTimer({ isStarting, onOverTime }),
      {
        initialProps: { isStarting: false },
      },
    );

    rerender({ isStarting: true });

    act(() => {
      jest.advanceTimersByTime(1000 * 60 * 5);
    });

    expect(onOverTime).toHaveBeenCalledTimes(1);
  });

  it('1秒経過後、スタートをリセットするとタイマーもリセットされる', () => {
    const { result, rerender } = renderHook(
      ({ isStarting }) => useTimer({ isStarting, onOverTime: jest.fn() }),
      {
        initialProps: { isStarting: true },
      },
    );

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    rerender({ isStarting: false });

    expect(result.current.remainingTime).toBe(1000 * 60 * 5);
  });
});
