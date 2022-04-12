import React from 'react';
import { v4 as uuid } from 'uuid';

function List({ pages }) {
  const modifiedPages = pages.map((page) => ({ id: uuid(), ...page }));

  return (
    <ul>
      {modifiedPages.map((page) => (
        <li key={page.id}>{page.content}</li>
      ))}
    </ul>
  );
}

export default List;
