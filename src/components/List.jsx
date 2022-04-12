import React from 'react';

function List({ pages }) {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.id}>{page.content}</li>
      ))}
    </ul>
  );
}

export default List;
