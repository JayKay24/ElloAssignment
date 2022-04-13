import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import DoublePage from './DoublePage';

import StyledButtonContainer from './styled/StyledButtonContainer';
import StyledButtonLarge from './styled/StyledButtonLarge';

/**
 * Return an array of <= 2 elements to be used to display a
 * Book view
 *
 * @param {Array} pages - an array of page objects
 * @param {number} startIdx - index to begin slice
 * @param {number} pagesPerView - maximum size of slice
 * @returns an array of <= 2 elements
 */
function extractDoublePage(originalPages, startIdx, pagesPerView = 2) {
  // Add 1 to ensure slice is at least two elements
  const pages = originalPages.slice(startIdx, startIdx + pagesPerView);

  // Provide a unique value for react 'key' prop
  return pages.map((page) => ({ id: uuid(), ...page }));
}

function List({ pages }) {
  const [pageIdx, setPageIdx] = useState(0);
  const doublePages = extractDoublePage(pages, pageIdx);

  const incrementPageNum = () => {
    const newIdx = pageIdx + 2;
    if (newIdx <= pages[pages.length - 1].pageIndex) setPageIdx(newIdx);
  };
  const decrementPageNum = () => {
    const newIdx = pageIdx - 2;
    if (newIdx >= 0) setPageIdx(newIdx);
  };

  return (
    <section>
      <DoublePage doublePage={doublePages} />
      <StyledButtonContainer>
        <StyledButtonLarge onClick={decrementPageNum}>Prev</StyledButtonLarge>
        <StyledButtonLarge onClick={incrementPageNum}>Next</StyledButtonLarge>
      </StyledButtonContainer>
    </section>
  );
}

export default List;
