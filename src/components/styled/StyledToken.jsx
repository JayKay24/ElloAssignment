import styled from 'styled-components';

const StyledToken = styled.div`
  hr {
    border: 1px solid black;
  }
  .head {
    margin-bottom: 20px;
  }

  .para {
    text-align: center;

    > h3 {
      margin-bottom: 20px;
      margin-top: 10px;
    }
    > p {
      align-items: center;
      border: 1px solid;
      display: flex;
      font-size: 1.5rem;
      flex-wrap: wrap;
      height: 20vh;
      justify-content: center;
      margin: auto;
      padding: 5px;
      width: 45%;
    }
  }
`;

export default StyledToken;
