import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Main } from '.';

describe('Plus', () => {
  test('初期画面の「＋」の文字列の数が1つ表示されている', () => {
    render(<Main />);
    const plusMark = screen.getAllByText('+');
    expect(plusMark).toHaveLength(1);
  });
  test('1回クリックしたあと、Plusマークの数が1つ表示されている', async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];
    await waitFor(() => {
      user.click(buttonElement);
      const plusMark = screen.getAllByText('+');
      expect(plusMark).toHaveLength(1);
    });
  });
});
describe('ボタンのテスト', () => {
  test('初期のボタンの表示は「Start」になっている', () => {
    render(<Main />);
    const buttonElement = screen.getAllByRole('button')[0];
    expect(buttonElement.textContent).toContain('Start');
  });

  test('2回クリックしたあとのボタンの表示は「Reset」になっている', async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];
    const clickButton = async (button: HTMLElement, times: number) => {
      for (let i = 0; i < times; i++) {
        await user.click(button);
      }
    };

    await clickButton(buttonElement, 2);
    expect(buttonElement.textContent).toContain('Reset');
  });
});
describe('問題の生成', () => {
  test('初期値の表示がd「----」になる', () => {
    render(<Main />);
    const defaultQuestion = '----';
    const questionLeft = screen.getByTestId('questionLeft').textContent;
    const questionRight = screen.getByTestId('questionRight').textContent;
    expect(questionLeft).toBe(defaultQuestion);
    expect(questionRight).toBe(defaultQuestion);
  });
  test('問題の数値が4桁を生成する', async () => {
    render(<Main />);
    const questionLeft = screen.getByTestId('questionLeft').textContent;
    const questionRight = screen.getByTestId('questionRight').textContent;
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];
    await user.click(buttonElement);
    expect(questionLeft).toHaveLength(4);
    expect(questionRight).toHaveLength(4);
  });
});
describe('計算', () => {
  test('問題を取得し計算結果が一致する', async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];
    await user.click(buttonElement);
    const questionLeft = screen.getByTestId('questionLeft').textContent;
    const questionRight = screen.getByTestId('questionRight').textContent;
    const ans = Number(questionLeft) + Number(questionRight);
    expect(Number(ans)).toBe(ans);
  });
  test('問題を取得し、問題の桁数が4桁、且つ計算結果が一致する', async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];
    await user.click(buttonElement);
    const questionLeft = screen.getByTestId('questionLeft').textContent;
    const questionRight = screen.getByTestId('questionRight').textContent;
    const ans = Number(questionLeft) + Number(questionRight);
    await user.click(buttonElement);
    expect(questionLeft).toHaveLength(4);
    expect(questionRight).toHaveLength(4);
    expect(Number(ans)).toBe(ans);
  });
});
