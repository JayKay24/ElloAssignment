import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

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
        <StyledMain>Main</StyledMain>
      </StyledContainer>
    </ApolloProvider>
  );
}

export default App;
