import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PartsLayout } from '.';

describe('PartsLayout', () => {
  test('PartsLayoutに渡されたchildrenが表示されている', () => {
    const mockStr = 'Children要素';
    const mockValues = {
      children: <div>{mockStr}</div>,
    };

    render(<PartsLayout {...mockValues} />);
    expect(screen.getByText(mockStr)).toBeInTheDocument();
  });
});
