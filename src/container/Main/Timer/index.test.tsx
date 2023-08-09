import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Timer } from ".";

describe("Timer", () => {
  test("1000*10*60を渡すと10:00:000が表示される", () => {
    const mockValues = {
      durationInMs: 1000 * 10 * 60,
      isStart: false,
    };
    render(<Timer {...mockValues} />);
    const timerLabel = screen.getByTestId("timer");
    expect(timerLabel).toHaveTextContent("10:00:000");
  });
});
