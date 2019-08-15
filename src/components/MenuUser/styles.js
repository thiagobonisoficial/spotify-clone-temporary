import styled from "styled-components";
import { NavLink } from "react-router-dom";

// GLOBAL STYLES
import Color from "styles/Colors";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0 0 0;
`;

export const Title = styled.span`
  font-family: "Circular-Bold";
  font-size: 0.875rem;
  color: white;
`;

export const Hyperlink = styled(NavLink)`
  &.active {
    i,
    ${Title} {
      color: ${Color.greenLight} !important;
    }
  }

  &:hover {
    i,
    ${Title} {
      color: ${Color.greenLight} !important;
    }
  }
`;
