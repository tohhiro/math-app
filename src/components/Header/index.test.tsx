import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header', () => {
  test('headerに「暗算しましょう。」というテキストが表示される', () => {
    render(<Header />);
    const headerElement = screen.getByText('暗算しましょう');
    expect(headerElement).toBeInTheDocument();
  });
});
