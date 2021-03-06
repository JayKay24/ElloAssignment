import React from 'react';
// eslint-disable-next-line prettier/prettier
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Book from './components/Book';
import ErrorBoundary from './components/ErrorBoundary';

import StyledContainer from './components/styled/StyledContainer';
import StyledHeader from './components/styled/StyledHeader';
import StyledH1 from './components/styled/StyledH1';
import StyledMain from './components/styled/StyledMain';

const client = new ApolloClient({
  uri: 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StyledContainer>
        <StyledHeader>
          <StyledH1>Ello Challenge</StyledH1>
        </StyledHeader>
        <StyledMain>
          <ErrorBoundary>
            <Book />
          </ErrorBoundary>
        </StyledMain>
      </StyledContainer>
    </ApolloProvider>
  );
}

export default App;
