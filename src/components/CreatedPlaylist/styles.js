import styled from "styled-components";
import { NavLink } from "react-router-dom";

// GLOBAL STYLES
import Scrollbar from "styles/Scrollbar";
import Color from "styles/Colors";

export const List = styled.ul`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1.3rem 0 0.5rem 0;

  ${Scrollbar}
`;

export const Item = styled.li`
  padding: 0 0 0.5rem 1.5rem;
`;

export const Hyperlink = styled(NavLink)`
  font-family: "Circular-Bold";
  font-size: 0.875rem;
  color: ${Color.greyBlack};

  &:hover {
    color: white;
  }
`;
