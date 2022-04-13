import React from 'react';

import StyledPage from './styled/StyledPage';

function Page({ page }) {
  return <StyledPage>{page.content}</StyledPage>;
}

export default Page;
