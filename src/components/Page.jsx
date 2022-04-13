import React from 'react';

import StyledPage from './styled/StyledPage';

function Page({ page }) {
  return (
    <StyledPage>
      <span>{page.content}</span>
    </StyledPage>
  );
}

export default Page;
