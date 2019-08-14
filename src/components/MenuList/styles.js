import styled from "styled-components";
import { NavLink } from "react-router-dom";

// GLOBAL STYLES
import Color from "styles/Colors";

export const List = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 0 1.5rem 0;
  text-align: left;
`;

export const Title = styled.span`
  vertical-align: middle;
`;

export const Hyperlink = styled(NavLink)`
  padding: 0.4rem;
  font-family: "Circular-Bold";
  font-size: 0.875rem;
  color: ${Color.greyLight};

  &.active {
    padding: 0.15rem;
    border-left: 4px ${Color.greenLight2} solid;

    i,
    ${Title} {
      color: white;
    }
  }

  &:hover {
    i,
    ${Title} {
      color: white;
      transition-duration: 1s;
    }
  }
`;

export const Item = styled.li`
  padding: 0.5rem 0 0.5rem 0;
`;
