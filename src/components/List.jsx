import React, { useState, useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import DoublePage from './DoublePage';

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

/**
 * Build up a matrix with subarrays of <= 2 elements to be used
 * to build up a two page view
 *
 * @param {*} pages - an array of page objects
 * @returns a matrix with subarrays of <= 2 elements
 */
function extractDoublePage(originalPages) {
  const pages = injectUUIDPerPage(originalPages);
  const doublePages = [];

  for (let i = 0; i < pages.length; i++) {
    const doublePage = [];
    const windowLength = i + 2;
    for (let j = i; j < windowLength && j < pages.length; j++) {
      doublePage.push(pages[j]);
      i = j;
    }

    doublePages.push(doublePage);
  }

  return doublePages;
}

function List({ pages }) {
  // Don't re-run extractDoublePage if pages has not changed
  const doublePages = useMemo(() => extractDoublePage(pages), [pages]);
  const [pageIdx, setPageIdx] = useState(0);

  const incrementPageNum = () => {
    if (pageIdx < doublePages.length) setPageIdx(pageIdx + 1);
  };
  const decrementPageNum = () => {
    if (pageIdx > 0) setPageIdx(pageIdx - 1);
  };

  return (
    <section>
      <button type="button" onClick={decrementPageNum}>
        Prev
      </button>
      <button type="button" onClick={incrementPageNum}>
        Next
      </button>
      <DoublePage doublePage={doublePages[pageIdx]} />
    </section>
  );
}

export default List;
