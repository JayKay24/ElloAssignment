import React from 'react';
import { v4 as uuid } from 'uuid';

import ListItem from './ListItem';

function List({ pages }) {
  const modifiedPages = pages.map((page) => ({ id: uuid(), ...page }));

  return (
    <section>
      {modifiedPages.map((page) => (
        <ListItem key={page.id} page={page} />
      ))}
    </section>
  );
}

export default List;
