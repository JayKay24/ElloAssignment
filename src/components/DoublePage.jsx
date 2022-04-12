import React from 'react';

function DoublePage({ doublePage }) {
  return <pre>{JSON.stringify(doublePage, null, 2)}</pre>;
}

export default DoublePage;
