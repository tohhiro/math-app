import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ResetButton } from ".";

describe("ResetButton", () => {
  test("ボタンの表示", () => {
    const onClick = jest.fn();
    render(<ResetButton onClick={onClick} />);
    const resetLabel = screen.getByRole("button");
    expect(resetLabel).toHaveTextContent("リセット");
  });
});
