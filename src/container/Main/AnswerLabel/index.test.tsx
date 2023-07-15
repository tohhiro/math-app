import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AnswerLabel } from ".";

describe("AnswerLabel", () => {
  test("Answerラベルの文字列がAnswerである", () => {
    render(<AnswerLabel answer={123} />);
    const answerLabel = screen.getByRole("label");
    expect(answerLabel).toHaveTextContent("Answer");
  });
});
