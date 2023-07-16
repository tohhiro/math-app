import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from ".";

describe("Plus", () => {
  test("ボタンの表示", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} label="+" />);
    const plusMark = screen.getByRole("button");
    expect(plusMark).toHaveTextContent("+");
  });
  test("ボタンの表示", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} label="Reset" />);
    const plusMark = screen.getByRole("button");
    expect(plusMark).toHaveTextContent("Reset");
  });
});
