import styled from "styled-components";

// GLOBAL STYLES
import Color from "styles/Colors";

export const Menu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 0 1.5rem 0;
  text-align: left;
`;

export const Title = styled.span`
  margin: 0 0 0 1.2rem;
  font-family: "Circular-Light";
  font-size: 0.875rem;
  color: ${Color.greyLight};
  letter-spacing: 0.1rem;
`;
