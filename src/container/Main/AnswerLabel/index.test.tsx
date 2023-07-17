import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AnswerLabel } from ".";

describe("AnswerLabel", () => {
  test("Answerラベルの文字列がAnswerである", () => {
    render(<AnswerLabel answer={123} />);
    const answerLabel = screen.getByRole("label");
    expect(answerLabel).toHaveTextContent("Answer");
  });
  test("Answerが123である", () => {
    render(<AnswerLabel answer={123} />);
    const answerLabel = screen.getByTestId("answer");
    expect(answerLabel).toHaveTextContent("123");
  });
});
