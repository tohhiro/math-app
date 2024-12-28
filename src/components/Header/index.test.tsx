import { render } from '@testing-library/react';
import { Header } from '.';

describe('Header', () => {
  test('headerに「暗算しましょう。」というテキストが表示される', () => {
    const { getByText } = render(<Header />);

    const headerElement = getByText('暗算しましょう');
    expect(headerElement).toBeInTheDocument();
  });
});
