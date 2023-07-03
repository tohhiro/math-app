import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Plus", () => {
  test("初期画面のPlusマークの数", () => {
    render(<App />);
    const plusMark = screen.getAllByText("+");
    expect(plusMark.length).toBe(2);
  });
  test("クリックしたあとのPlusマークの数", async () => {
    render(<App />);
    const user = userEvent.setup();
    const buttonElement = screen.getByRole("button");
    await waitFor(() => {
      user.click(buttonElement);
      const plusMark = screen.getAllByText("+");
      expect(plusMark.length).toBe(1);
    });
  });
});
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
