import React from 'react';

import StyledItem from './styled/StyledItem';

function Page({ page }) {
  return <StyledItem>{page.content}</StyledItem>;
}

export default Page;
