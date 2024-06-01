import React from 'react';
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
describe.skip('ボタンのテスト', () => {
  test('初期のボタンの表示は「Start」になっている', () => {
    render(<Main />);
    const buttonElement = screen.getAllByRole('button')[0];
    expect(buttonElement.textContent).toContain('Start');
  });
  test('最初にクリックしたあとのボタンの表示は「+」になっている', async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];
    await user.click(buttonElement);
    expect(buttonElement.textContent).toContain('+');
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
describe.skip('計算', () => {
  test('問題を取得し計算結果が一致する', async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];
    await user.click(buttonElement);
    const questionLeft = screen.getByTestId('questionLeft').textContent;
    const questionRight = screen.getByTestId('questionRight').textContent;
    const ans = Number(questionLeft) + Number(questionRight);
    await user.click(buttonElement);
    const renderAns = screen.getByTestId('answer').textContent;
    expect(Number(renderAns)).toBe(ans);
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
    const renderAns = screen.getByTestId('answer').textContent;
    expect(questionLeft).toHaveLength(4);
    expect(questionRight).toHaveLength(4);
    expect(Number(renderAns)).toBe(ans);
  });
});
describe.skip('Answerの（）のカウント', () => {
  test('初期表示は、Answer（0）と表示される', async () => {
    render(<Main />);
    const answerLabel = screen.getByRole('label');
    expect(answerLabel.textContent).toBe('Answer（0）');
  });
  test('ボタンが+の時に2回クリックしたら、Answer（2）と表示される', async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];
    const clickButton = async (button: HTMLElement, times: number) => {
      for (let i = 0; i < times; i++) {
        await user.click(button);
      }
    };

    await clickButton(buttonElement, 4);
    const answerLabel = screen.getByRole('label');
    expect(answerLabel.textContent).toBe('Answer（2）');
  });
});
describe.skip('リセットボタン', () => {
  let confirmSpy: jest.SpyInstance;
  beforeEach(() => {
    confirmSpy = jest.spyOn(window, 'confirm');
    confirmSpy.mockImplementation(jest.fn(() => true));
  });
  afterEach(() => confirmSpy.mockRestore());
  test('初期状態はリセットはdisableになる', async () => {
    render(<Main />);
    const buttonElement = screen.getByRole('button', { name: 'リセット' });
    waitFor(() => expect(buttonElement).toBeEnabled());
  });
  test('ボタンが+の時に2回クリックしたら、Answer（2）と表示され、リセットボタンを押すとAnswer（0）と表示される', async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];

    const clickButton = async (button: HTMLElement, times: number) => {
      for (let i = 0; i < times; i++) {
        await user.click(button);
      }
    };

    await clickButton(buttonElement, 4);

    const answerLabel = screen.getByRole('label');
    await waitFor(() => {
      expect(answerLabel.textContent).toBe('Answer（2）');
    });
    const resetButtonElement = screen.getAllByRole('button')[1];
    await user.click(resetButtonElement);

    await waitFor(() => {
      expect(answerLabel.textContent).toBe('Answer（0）');
    });
  });
  test('ボタンが+の時にクリックしたら、9秒台のタイムが表示され、リセットボタンを押すと10:00:00と表示される', async () => {
    render(<Main />);
    const user = userEvent.setup();
    const buttonElement = screen.getAllByRole('button')[0];
    const clickButton = async (button: HTMLElement, times: number) => {
      for (let i = 0; i < times; i++) {
        await user.click(button);
      }
    };

    await clickButton(buttonElement, 2);

    const timerLabel = screen.getByTestId('timer');
    await waitFor(() => {
      expect(timerLabel.textContent).toMatch(/^09:/);
    });
    const resetButtonElement = screen.getByRole('button', { name: 'リセット' });
    waitFor(() => expect(resetButtonElement).toBeEnabled());
    await user.click(resetButtonElement);

    await waitFor(() => {
      expect(timerLabel.textContent).toBe('10:00:000');
    });

    waitFor(() => expect(resetButtonElement).toBeDisabled());
  });
});
