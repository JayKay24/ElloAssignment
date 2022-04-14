import styled from 'styled-components';

const StyledPage = styled.div`
  align-items: center;
  border: 1px solid;
  display: flex;
  font-size: 1.5rem;
  flex-wrap: wrap;
  height: 30vh;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 5px;
  text-align: center;
  width: 45%;

  > span {
    display: inline-block;
  }

  @media only screen and (max-width: 570px) {
    height: 44vh;
    width: 100%;
  }
`;

export default StyledPage;
