import styled from "styled-components";

const Close = styled.button`
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.2s;
  }
`;

export default Close;
