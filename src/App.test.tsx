import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Search from 'Pages/Search/Search';
import AboutUs from 'Pages/AboutUs/AboutUs';
import NotFound from 'Pages/NotFound/NotFound';
import Header from 'Pages/Header/Header';

test('renders App page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Default page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Search page', () => {
  render(<Search />);
  const linkElement = screen.getByText(/Search page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders about us page', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/Information/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders not found page', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/wrong url/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders not found page', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Current/i);
  expect(linkElement).toBeInTheDocument();
});
