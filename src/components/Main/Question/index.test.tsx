import { render } from '@testing-library/react';
import { Question } from '.';

describe('Question', () => {
  const mockValues = { questions: [1234, 4567] };

  test('Questionに渡されたpropsが表示されている', () => {
    const { getByTestId } = render(<Question {...mockValues} />);

    const questionLeft = getByTestId('questionLeft');
    const questionRight = getByTestId('questionRight');
    expect(questionLeft).toHaveTextContent(String(mockValues.questions[0]));
    expect(questionRight).toHaveTextContent(String(mockValues.questions[1]));
  });

  test('Questionに渡されたpropsが計算される', () => {
    const { getByTestId } = render(<Question {...mockValues} />);

    const questionLeft = getByTestId('questionLeft');
    const questionRight = getByTestId('questionRight');
    const ans =
      Number(questionLeft.textContent) + Number(questionRight.textContent);
    expect(ans).toBe(mockValues.questions[0] + mockValues.questions[1]);
  });
});
