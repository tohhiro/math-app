import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Question } from ".";

describe("Question", () => {
  test("Questionに渡されたpropsが表示されている", () => {
    const mockValues = {
      questionLeft: 123,
      questionRight: 456,
    };

    render(<Question {...mockValues} />);
    const questionLeft = screen.getByTestId("questionLeft");
    const questionRight = screen.getByTestId("questionRight");
    expect(questionLeft).toHaveTextContent(String(mockValues.questionLeft));
    expect(questionRight).toHaveTextContent(String(mockValues.questionRight));
  });
  test("Questionに渡されたpropsが計算される", () => {
    const mockValues = {
      questionLeft: 123,
      questionRight: 456,
    };
    render(<Question {...mockValues} />);
    const questionLeft = screen.getByTestId("questionLeft");
    const questionRight = screen.getByTestId("questionRight");
    const ans =
      Number(questionLeft.textContent) + Number(questionRight.textContent);
    expect(ans).toBe(mockValues.questionLeft + mockValues.questionRight);
  });
});
