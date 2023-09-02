import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Main } from ".";

describe("Plus", () => {
  test("初期画面の「＋」の文字列の数", () => {
    render(<Main />);
    const plusMark = screen.getAllByText("+");
    expect(plusMark).toHaveLength(1);
  });
  test("クリックしたあとのPlusマークの数", async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole("button")[0];
    await waitFor(() => {
      user.click(buttonElement);
      const plusMark = screen.getAllByText("+");
      expect(plusMark).toHaveLength(1);
    });
  });
});
describe("ボタンのテスト", () => {
  test("初期のボタンの表示", () => {
    render(<Main />);
    const buttonElement = screen.getAllByRole("button")[0];
    expect(buttonElement.textContent).toContain("Start");
  });
  test("最初にクリックしたあとのボタンの表示", async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole("button")[0];
    await user.click(buttonElement);
    expect(buttonElement.textContent).toContain("+");
  });
  test("2回クリックしたあとのボタンの表示", async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole("button")[0];
    await user.click(buttonElement);
    await user.click(buttonElement);
    expect(buttonElement.textContent).toContain("Reset");
  });
});
describe("問題の生成", () => {
  test("問題の数値が4桁を生成する", () => {
    render(<Main />);
    const questionLeft = screen.getByTestId("questionLeft").textContent;
    const questionRight = screen.getByTestId("questionRight").textContent;
    expect(questionLeft).toHaveLength(4);
    expect(questionRight).toHaveLength(4);
  });
});
describe("計算", () => {
  test("問題を取得し計算結果が一致するか", async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole("button")[0];
    await user.click(buttonElement);
    const questionLeft = screen.getByTestId("questionLeft").textContent;
    const questionRight = screen.getByTestId("questionRight").textContent;
    const ans = Number(questionLeft) + Number(questionRight);
    await user.click(buttonElement);
    const renderAns = screen.getByTestId("answer").textContent;
    expect(Number(renderAns)).toBe(ans);
  });
  test("問題を取得し、問題の桁数が4桁、且つ計算結果が一致するか", async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole("button")[0];
    await user.click(buttonElement);
    const questionLeft = screen.getByTestId("questionLeft").textContent;
    const questionRight = screen.getByTestId("questionRight").textContent;
    const ans = Number(questionLeft) + Number(questionRight);
    await user.click(buttonElement);
    const renderAns = screen.getByTestId("answer").textContent;
    expect(questionLeft).toHaveLength(4);
    expect(questionRight).toHaveLength(4);
    expect(Number(renderAns)).toBe(ans);
  });
});
describe("Answerの（）のカウント", () => {
  test("初期表示は、Answer（0）と表示される", async () => {
    render(<Main />);
    const answerLabel = screen.getByRole("label");
    expect(answerLabel.textContent).toBe("Answer（0）");
  });
  test("ボタンが+の時に2回クリックしたら、Answer（2）と表示される", async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole("button")[0];
    await user.click(buttonElement); // Start
    await user.click(buttonElement); // +
    await user.click(buttonElement); // Reset
    await user.click(buttonElement); // +
    const answerLabel = screen.getByRole("label");
    expect(answerLabel.textContent).toBe("Answer（2）");
  });
});
describe("リセットボタン", () => {
  test("ボタンが+の時に2回クリックしたら、Answer（2）と表示され、リセットボタンを押すとAnswer（0）と表示される", async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole("button")[0];
    await user.click(buttonElement); // Start
    await user.click(buttonElement); // +
    await user.click(buttonElement); // Reset
    await user.click(buttonElement); // +
    const answerLabel = screen.getByRole("label");
    await waitFor(() => {
      expect(answerLabel.textContent).toBe("Answer（2）");
    });
    const resetButtonElement = screen.getAllByRole("button")[1];
    await user.click(resetButtonElement);

    await waitFor(() => {
      expect(answerLabel.textContent).toBe("Answer（0）");
    });
  });
  test("ボタンが+の時にクリックしたら、9秒台のタイムが表示され、リセットボタンを押すと10:00:00と表示される", async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole("button")[0];
    await user.click(buttonElement); // Start
    await user.click(buttonElement); // +
    const timerLabel = screen.getByTestId("timer");
    await waitFor(() => {
      expect(timerLabel.textContent).toMatch(/^09:/);
    });
    const resetButtonElement = screen.getAllByRole("button")[1];
    await user.click(resetButtonElement);

    await waitFor(() => {
      expect(timerLabel.textContent).toBe("10:00:000");
    });
  });
});
