import React from 'react';
import { v4 as uuid } from 'uuid';

import Page from './Page';

function List({ pages }) {
  const modifiedPages = pages.map((page) => ({ id: uuid(), ...page }));

  return (
    <section>
      {modifiedPages.map((page) => (
        <Page key={page.id} page={page} />
      ))}
    </section>
  );
}

export default List;
