import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("ボタンのテスト", () => {
  test("初期のボタンの表示", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.textContent).toContain("+");
  });
  test("クリックしたあとのボタンの表示", async () => {
    render(<App />);
    const user = userEvent.setup();
    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);
    expect(buttonElement.textContent).toContain("Reset");
  });
});
