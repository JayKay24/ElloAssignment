import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  dislay: flex;
  flex-direction: row;
  height: 5vh;
  margin-bottom: 15px;
  padding: 10px 5px;

  @media only screen and (max-width: 570px) {
    text-align: center;
  }
`;

export default StyledHeader;
