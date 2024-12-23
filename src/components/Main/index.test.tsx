import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Main } from '.';

describe('Plus', () => {
  const user = userEvent.setup();
  test('初期画面の「＋」の文字列の数が1つ表示されている', () => {
    const { getAllByText } = render(<Main />);

    const plusMark = getAllByText('+');
    expect(plusMark).toHaveLength(1);
  });

  test('1回クリックしたあと、Plusマークの数が1つ表示されている', async () => {
    const { getAllByRole, getAllByText } = render(<Main />);

    const buttonElement = getAllByRole('button')[0];
    await user.click(buttonElement);

    const plusMark = getAllByText('+');
    expect(plusMark).toHaveLength(1);
  });
});

describe('ボタンのテスト', () => {
  const user = userEvent.setup();

  test('初期のボタンの表示は「Start」になっている', () => {
    const { getAllByRole } = render(<Main />);

    const buttonElement = getAllByRole('button')[0];
    expect(buttonElement.textContent).toContain('Start');
  });

  test('2回クリックしたあとのボタンの表示は「Reset」になっている', async () => {
    const { getAllByRole } = render(<Main />);

    const buttonElement = getAllByRole('button')[0];
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
  const user = userEvent.setup();

  test('初期値の表示がd「----」になる', () => {
    const { getByTestId } = render(<Main />);

    const defaultQuestion = '----';
    const questionLeft = getByTestId('questionLeft').textContent;
    const questionRight = getByTestId('questionRight').textContent;

    expect(questionLeft).toBe(defaultQuestion);
    expect(questionRight).toBe(defaultQuestion);
  });

  test('問題の数値が4桁を生成する', async () => {
    const { getAllByRole, getByTestId } = render(<Main />);

    const questionLeft = getByTestId('questionLeft').textContent;
    const questionRight = getByTestId('questionRight').textContent;

    const buttonElement = getAllByRole('button')[0];
    await user.click(buttonElement);
    expect(questionLeft).toHaveLength(4);
    expect(questionRight).toHaveLength(4);
  });
});

describe('計算', () => {
  const user = userEvent.setup();

  test('問題を取得し計算結果が一致する', async () => {
    const { getAllByRole, getByTestId } = render(<Main />);
    const buttonElement = getAllByRole('button')[0];
    await user.click(buttonElement);

    const questionLeft = getByTestId('questionLeft').textContent;
    const questionRight = getByTestId('questionRight').textContent;
    const ans = Number(questionLeft) + Number(questionRight);

    expect(Number(ans)).toBe(ans);
  });

  test('問題を取得し、問題の桁数が4桁、且つ計算結果が一致する', async () => {
    const { getAllByRole, getByTestId } = render(<Main />);

    const buttonElement = getAllByRole('button')[0];
    await user.click(buttonElement);

    const questionLeft = getByTestId('questionLeft').textContent;
    const questionRight = getByTestId('questionRight').textContent;
    const ans = Number(questionLeft) + Number(questionRight);
    await user.click(buttonElement);

    expect(questionLeft).toHaveLength(4);
    expect(questionRight).toHaveLength(4);
    expect(Number(ans)).toBe(ans);
  });
});
