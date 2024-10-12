import { render, screen } from '@testing-library/react';
import { Question } from '.';

describe('Question', () => {
  const mockValues = { questions: [1234, 4567] };

  test('Questionに渡されたpropsが表示されている', () => {
    render(<Question {...mockValues} />);

    const questionLeft = screen.getByTestId('questionLeft');
    const questionRight = screen.getByTestId('questionRight');
    expect(questionLeft).toHaveTextContent(String(mockValues.questions[0]));
    expect(questionRight).toHaveTextContent(String(mockValues.questions[1]));
  });

  test('Questionに渡されたpropsが計算される', () => {
    render(<Question {...mockValues} />);

    const questionLeft = screen.getByTestId('questionLeft');
    const questionRight = screen.getByTestId('questionRight');
    const ans =
      Number(questionLeft.textContent) + Number(questionRight.textContent);
    expect(ans).toBe(mockValues.questions[0] + mockValues.questions[1]);
  });
});
