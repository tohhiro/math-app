import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AnswerLabel } from ".";

describe("AnswerLabel", () => {
  test("Answerラベルの文字列がAnswer（3）である", () => {
    render(<AnswerLabel answer={123} count={3} />);
    const answerLabel = screen.getByRole("label");
    expect(answerLabel).toHaveTextContent("Answer（3）");
  });
  test("Answerが123である", () => {
    render(<AnswerLabel answer={123} count={3} />);
    const answerLabel = screen.getByTestId("answer");
    expect(answerLabel).toHaveTextContent("123");
  });
});
