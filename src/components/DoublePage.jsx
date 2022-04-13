import React from 'react';

import Page from './Page';

import StyledDoublePage from './styled/StyledDoublePage';

function DoublePage({ doublePage }) {
  return (
    <StyledDoublePage>
      {doublePage.map((page) => (
        <Page key={page.id} page={page} />
      ))}
    </StyledDoublePage>
  );
}

export default DoublePage;
