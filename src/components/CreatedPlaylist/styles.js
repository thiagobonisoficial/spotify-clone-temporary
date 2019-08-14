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

export const Hyperlink = styled(NavLink)`
  padding: 0 0 0 1.5rem;
  font-family: "Circular-Bold";
  font-size: 0.875rem;
  color: ${Color.greyBlack};

  &:hover {
    color: white;
  }

  &.active {
    padding: 0 0 0 1.3rem;
    color: white;
    border-left: 4px ${Color.greenLight2} solid;
  }
`;

export const Item = styled.li`
  padding: 0 0 0.5rem 0;
`;
