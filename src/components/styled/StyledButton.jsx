import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #171212;
  cursor: pointer;
  padding: 5px;
  transition: all 0.1s ease-in;

  &:hover {
    background: #171212;
    color: #ffffff;
  }
`;

export default StyledButton;
