import { renderHook } from '@testing-library/react-hooks';
import { HeaderColorProvider, useHeaderColor } from './useHeaderColorContext';

describe('useHeaderColorContextの値をセット、取得のテスト', () => {
  const setup = () => {
    const { result } = renderHook(() => useHeaderColor(), {
      wrapper: HeaderColorProvider,
    });
    return { result };
  };
  test('useHeaderColorの初期値は「stop」', () => {
    const { result } = setup();
    expect(result.current.get()).toBe('stop');
  });
  test('useHeaderColorに「running」をセットするとget()で同じ値が取得できる', () => {
    const { result } = setup();
    const mockHeaderColor = 'running';
    result.current.set(mockHeaderColor);
    expect(result.current.get()).toBe(mockHeaderColor);
  });
});
