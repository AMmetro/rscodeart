import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Search from 'Pages/Search/Search';

test('renders App page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Default page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Current page', () => {
  render(<Search />);
  const linkElement = screen.getByText(/Search page/i);
  expect(linkElement).toBeInTheDocument();
});
