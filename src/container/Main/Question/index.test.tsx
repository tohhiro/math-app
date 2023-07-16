import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Question } from ".";

describe("Question", () => {
  test("Questionに渡されたpropsが表示されている", () => {
    render(<Question q0={123} q1={456} />);
    const q0 = screen.getByTestId("q0");
    const q1 = screen.getByTestId("q1");
    expect(q0).toHaveTextContent("123");
    expect(q1).toHaveTextContent("456");
  });
  test("Questionに渡されたpropsが計算される", () => {
    render(<Question q0={123} q1={456} />);
    const q0 = screen.getByTestId("q0");
    const q1 = screen.getByTestId("q1");
    const ans = Number(q0.textContent) + Number(q1.textContent);
    expect(ans).toBe(579);
  });
});
