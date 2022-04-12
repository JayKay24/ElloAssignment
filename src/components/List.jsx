import React from 'react';
import { v4 as uuid } from 'uuid';

import Page from './Page';

/**
 * Inject an id property per page to be used as a key prop
 * during rendering
 *
 * @param {array} pages - an array of page objects
 * @returns a new array of page objects each containing an id property
 */
function injectUUIDPerPage(pages) {
  return pages.map((page) => ({ id: uuid(), ...page }));
}

function List({ pages }) {
  const modifiedPages = injectUUIDPerPage(pages);

  return (
    <section>
      {modifiedPages.map((page) => (
        <Page key={page.id} page={page} />
      ))}
    </section>
  );
}

export default List;
