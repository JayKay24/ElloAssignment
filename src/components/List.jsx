/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DoublePage from './DoublePage';
import Token from './Token';

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
  return originalPages.slice(startIdx, startIdx + pagesPerView);
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
    <Router>
      <Route exact path="/">
        <section>
          <DoublePage doublePage={doublePages} />
          <StyledButtonContainer>
            <StyledButtonLarge onClick={decrementPageNum}>Prev</StyledButtonLarge>
            <StyledButtonLarge onClick={incrementPageNum}>Next</StyledButtonLarge>
          </StyledButtonContainer>
        </section>
      </Route>
      <Route path="/token/:value">
        <Token />
      </Route>
    </Router>
  );
}

export default List;
