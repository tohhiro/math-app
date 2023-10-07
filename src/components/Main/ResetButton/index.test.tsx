import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ResetButton } from ".";

describe("ResetButton", () => {
  test("「リセット」というボタンが表示される", () => {
    const mockValues = {
      onClick: jest.fn(),
      disabled: false,
    };

    render(<ResetButton {...mockValues} />);
    const resetLabel = screen.getByRole("button");
    expect(resetLabel).toHaveTextContent("リセット");
  });
  test("ボタンがクリックできる", () => {
    const mockValues = {
      onClick: jest.fn(),
      disabled: false,
    };
    render(<ResetButton {...mockValues} />);
    const resetLabel = screen.getByRole("button");
    expect(resetLabel).toBeEnabled();
  });
  test("ボタンがクリックできない", () => {
    const mockValues = {
      onClick: jest.fn(),
      disabled: true,
    };
    render(<ResetButton {...mockValues} />);
    const resetLabel = screen.getByRole("button");
    expect(resetLabel).toBeDisabled();
  });
});
