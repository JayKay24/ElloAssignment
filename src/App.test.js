/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ello challenge/i);
  expect(linkElement).toBeInTheDocument();
});
