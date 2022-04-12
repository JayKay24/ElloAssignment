import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { v4 as uuid } from 'uuid';

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
  const [pages, setPages] = useState([]);

  const { loading: bookLoading, error: bookError, data } = useQuery(BOOK);

  const book = data && data.book;

  if (bookError) throw new Error('Failed to fetch book');

  if (bookLoading) return <div>Loading...</div>;

  if (book) {
    const modifiedPages = book.pages.map((page) => ({ id: uuid(), ...page }));

    setPages(modifiedPages);
  }

  return <List pages={pages} />;
}

export default Content;
