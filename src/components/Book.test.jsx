/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { act, render, screen } from '@testing-library/react';

import Book, { BOOK } from './Book';
import mockedBook from './utils/mockedBook';

const MOCKS = [
  {
    request: {
      query: BOOK,
    },
    result: {
      data: { book: { ...mockedBook } },
    },
  },
];

async function wait(ms = 0) {
  const resolver = (resolve) => setTimeout(resolve, ms);
  await act(() => new Promise(resolver));
}

it('renders the mocked data', async () => {
  const { container } = render(
    <MockedProvider addTypename={false} mocks={MOCKS}>
      <Book />
    </MockedProvider>,
  );

  expect(container.textContent).toBe('Loading...');

  await wait();

  const authorRegex = new RegExp(mockedBook.author);
  const authorOutput = screen.getByText(authorRegex);
  expect(authorOutput).toBeInTheDocument();

  const pattotOutput = screen.getByText(/parrot/i);
  expect(pattotOutput).toBeInTheDocument();
});
