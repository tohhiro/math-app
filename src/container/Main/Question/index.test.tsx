import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Question } from ".";

describe("Question", () => {
  test("Questionに渡されたpropsが表示されている", () => {
    render(<Question questionLeft={123} questionRight={456} />);
    const questionLeft = screen.getByTestId("questionLeft");
    const questionRight = screen.getByTestId("questionRight");
    expect(questionLeft).toHaveTextContent("123");
    expect(questionRight).toHaveTextContent("456");
  });
  test("Questionに渡されたpropsが計算される", () => {
    render(<Question questionLeft={123} questionRight={456} />);
    const questionLeft = screen.getByTestId("questionLeft");
    const questionRight = screen.getByTestId("questionRight");
    const ans =
      Number(questionLeft.textContent) + Number(questionRight.textContent);
    expect(ans).toBe(579);
  });
});
