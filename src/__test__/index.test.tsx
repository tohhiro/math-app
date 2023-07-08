import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Plus", () => {
  test("初期画面のPlusマークの数", () => {
    render(<App />);
    const plusMark = screen.getAllByText("+");
    expect(plusMark).toHaveLength(2);
  });
  test("クリックしたあとのPlusマークの数", async () => {
    render(<App />);
    const user = userEvent.setup();
    const buttonElement = screen.getByRole("button");
    await waitFor(() => {
      user.click(buttonElement);
      const plusMark = screen.getAllByText("+");
      expect(plusMark).toHaveLength(1);
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
describe("計算", () => {
  test("問題を取得し計算結果が一致するか", async () => {
    render(<App />);
    const user = userEvent.setup();
    const q0 = screen.getByTestId("q0").textContent;
    const q1 = screen.getByTestId("q1").textContent;
    const ans = Number(q0) + Number(q1);
    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);
    const renderAns = screen.getByTestId("answer").textContent;
    expect(Number(renderAns)).toBe(ans);
  });
});
