import { HeaderColorProvider, useHeaderColor } from "./useHeaderColorContext";
import { renderHook } from "@testing-library/react-hooks";

describe("useHeaderColorContextの値をセット、取得のテスト", () => {
  test("useHeaderColorの初期値は「stop」", () => {
    const { result } = renderHook(() => useHeaderColor(), {
      wrapper: HeaderColorProvider,
    });
    expect(result.current.get()).toBe("stop");
  });
  test("useHeaderColorに「running」をセットするとget()で同じ値が取得できる", () => {
    const { result } = renderHook(() => useHeaderColor(), {
      wrapper: HeaderColorProvider,
    });
    const mockHeaderColor = "running";
    result.current.set(mockHeaderColor);
    expect(result.current.get()).toBe(mockHeaderColor);
  });
});
