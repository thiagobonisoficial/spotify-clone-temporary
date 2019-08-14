import styled from "styled-components";
import { NavLink } from "react-router-dom";

// GLOBAL STYLES
import Colors from "styles/Colors";

export const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  padding: 2.5rem 0 2rem 0;
`;

export const Hyperlink = styled(NavLink)`
  font-family: "Circular-Bold";
  font-size: 0.8rem;
  color: ${Colors.greyLight};
  text-transform: uppercase;
  letter-spacing: 0.16em;

  &:hover {
    color: white;
  }

  &.active {
    &::after {
      content: "";
      height: 0.13rem;
      width: 2rem;
      background-color: ${Colors.greenLight};
      display: block;
      margin: 0.4rem auto;
    }
  }
`;
