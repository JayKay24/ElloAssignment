import styled from 'styled-components';

const StyledContainer = styled.div`
  background: #83a4d4 linear-gradient(to left, #b6fbff, #83a4d4);
  color: #171212;
  height: 100vh;
  padding: 20px;
  margin: 0;

  @media only screen and (max-width: 570px) {
    height: 150vh;
  }
`;

export default StyledContainer;
