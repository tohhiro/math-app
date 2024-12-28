import { render } from '@testing-library/react';
import { PartsLayout } from '.';

describe('PartsLayout', () => {
  test('PartsLayoutに渡されたchildrenが表示されている', () => {
    const mockStr = 'Children要素';
    const mockValues = {
      children: <div>{mockStr}</div>,
    };

    const { getByText } = render(<PartsLayout {...mockValues} />);
    expect(getByText(mockStr)).toBeInTheDocument();
  });
});
