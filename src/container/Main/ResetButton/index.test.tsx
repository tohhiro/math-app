import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ResetButton } from ".";

describe("ResetButton", () => {
  test("「リセット」というボタンが表示される", () => {
    const onClick = jest.fn();
    render(<ResetButton onClick={onClick} />);
    const resetLabel = screen.getByRole("button");
    expect(resetLabel).toHaveTextContent("リセット");
  });
  test("ボタンがクリックできる", () => {
    const onClick = jest.fn();
    render(<ResetButton onClick={onClick} />);
    const resetLabel = screen.getByRole("button");
    expect(resetLabel).toBeEnabled();
  });
});
