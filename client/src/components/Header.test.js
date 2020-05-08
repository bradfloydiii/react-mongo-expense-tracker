import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

test('render Expense Tracker header', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Expense Tracker/i);
  expect(linkElement).toEqual(<h2>Expense Tracker</h2>);
});
