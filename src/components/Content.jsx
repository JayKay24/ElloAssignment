import React from 'react';
import { gql, useQuery } from '@apollo/client';

import List from './List';

const BOOK = gql`
  query Query {
    book {
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

function Content() {
  const { loading: bookLoading, error: bookError, data } = useQuery(BOOK);

  const book = data && data.book;

  if (bookError) throw new Error('Failed to fetch book');

  if (bookLoading) return <div>Loading...</div>;

  return <List pages={book.pages} />;
}

export default Content;
