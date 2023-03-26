import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import AboutUs from 'Pages/AboutUs/AboutUs';
import NotFound from 'Pages/NotFound/NotFound';
import Header from 'Pages/Header/Header';
import CommonLayout from 'Pages/CommonLayout/CommonLayout';
import SearchLine from 'Pages/SearchLine/SearchLine';
import Search from 'Pages/Search/Search';
import Form from 'Pages/Form/Form';
import FormOutput from 'Pages/Form/FormOutput';

test('renders App page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Default page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Search page', () => {
  render(<SearchLine />);
  const linkElement = screen.getByText(/Go/i);
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

test('renders forms page', () => {
  render(<Form />);
  const linkElement = screen.getByText(/Add user data/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders forms page', () => {
  render(
    <FormOutput
      data={[
        {
          InputTxt: 'some text',
          InputDate: '',
          InputCheckBox: true,
          InputRadio: false,
          photoContent: '',
          InputDoc: '',
          InputSelect: 'Male',
        },
      ]}
    />
  );
  const linkElement = screen.getByText(/User name/i);
  expect(linkElement).toBeInTheDocument();
});

test('should be able to type in input', async () => {
  render(<Form />);
  const inputElement = screen.getByPlaceholderText(/your Name/i);
  expect(inputElement).toBeInTheDocument();
});

test('test button Submit', async () => {
  render(<Form />);
  const inputElement = screen.getByPlaceholderText(/your Name/i) as HTMLInputElement;;
  fireEvent.change(inputElement, { target: { value: 'input some txt' } });
  expect(inputElement.value).toBe('input some txt');
});

test('should have empty input when add button is clicked', async () => {
  render(<Form />);
  const inputElement = screen.getByPlaceholderText(/your Name/i) as HTMLInputElement;
  const buttonElement = screen.getByRole('button', { name: 'Submit' });
  fireEvent.change(inputElement, { target: { value: 'wrong validation process' } });
  fireEvent.click(buttonElement);
  expect(inputElement.value).toBe('wrong validation process');
});
