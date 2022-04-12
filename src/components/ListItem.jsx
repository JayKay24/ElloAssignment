import React from 'react';

import StyledItem from './styled/StyledItem';

function ListItem({ page }) {
  return <StyledItem>{page.content}</StyledItem>;
}

export default ListItem;
