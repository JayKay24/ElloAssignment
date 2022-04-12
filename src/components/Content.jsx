import React from 'react';
import { gql, useQuery } from '@apollo/client';

const BOOK = gql`
  query Query {
    book {
      pages {
        content
        pageIndex {
          token {
            position
            value
          }
        }
      }
    }
  }
`;

function List() {
  const { loading: bookLoading, error: bookError, data } = useQuery(BOOK);
  const book = data && data.book;

  if (bookError) throw new Error('Failed to fetch book');

  if (bookLoading) return <div>Loading...</div>;

  return (
    <ul>
      {book.pages.map((page) => (
        <li key={page.content}>{page.content}</li>
      ))}
    </ul>
  );
}

export default List;
