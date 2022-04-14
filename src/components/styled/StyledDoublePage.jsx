import styled from 'styled-components';

const StyledDoublePage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 570px) {
    flex-direction: column;
  }
`;

export default StyledDoublePage;
