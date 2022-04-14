import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import StyledPage from './styled/StyledPage';

/**
 * Map over tokens and generate links with content
 * words
 *
 * @param {string} content
 * @param {array} tokens
 * @returns a new array of objects with tokens mapped to content
 */
function generateContentLinks(content, tokens) {
  const contentLinks = [];

  for (const token of tokens) {
    const { position, value } = token;
    const wordToToken = {
      word: content.slice(position[0], position[1]),
      value,
      position,
    };
    contentLinks.push(wordToToken);
  }

  return contentLinks;
}

function Page({ page }) {
  const { content, tokens } = page;
  // Don't re-run generateContentLinks unless page has changed
  // eslint-disable-next-line prettier/prettier
  const contentLinks = useMemo(() => generateContentLinks(content, tokens), [page]);

  return (
    <StyledPage>
      {contentLinks.map((wordToToken) => (
        <span key={wordToToken.position[0]}>
          <Link to={`/token/${wordToToken.value}`}>{wordToToken.word}</Link>
          &nbsp;
        </span>
      ))}
    </StyledPage>
  );
}

export default Page;
