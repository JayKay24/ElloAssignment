import styled from 'styled-components';

const StyledH1 = styled.h1`
  display: inline-block;
  font-size: 48px;
  font-weight: 500;
  margin: 0;

  @media screen and (max-width: 570px) {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export default StyledH1;
