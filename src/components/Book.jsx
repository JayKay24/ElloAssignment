import React from 'react';
import { gql, useQuery } from '@apollo/client';

import List from './List';

import StyledBookAuthor from './styled/StyledBookAuthor';

const BOOK = gql`
  query Query {
    book {
      author
      pages {
        content
        pageIndex
        tokens {
          position
          value
        }
      }
    }
  }
`;

function Book() {
  const { loading: bookLoading, error: bookError, data } = useQuery(BOOK);

  const book = data && data.book;

  if (bookError) throw new Error('Failed to fetch book');

  if (bookLoading) return <div>Loading...</div>;

  return (
    <>
      <StyledBookAuthor>
        <h3>
          <span>By &nbsp;</span>
          {book.author}
        </h3>
      </StyledBookAuthor>
      <List pages={book.pages} />
    </>
  );
}

export default Book;
