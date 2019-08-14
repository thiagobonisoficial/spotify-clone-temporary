import styled from "styled-components";
import { NavLink } from "react-router-dom";

// GLOBAL STYLES
import Color from "styles/Colors";

export const More = styled.div`
  width: 2.5rem;
  margin: 0 1rem 0 0;
  font-size: 2rem;
  color: ${Color.black};
  background-color: ${Color.greyLight3};
  text-align: center;
`;

export const Title = styled.span`
  font-family: "Circular-Bold";
  font-size: 0.875rem;
  color: ${Color.greyLight};
`;

export const Hyperlink = styled(NavLink)`
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;
  margin: 1rem 0.5rem 0 1.3rem;
  text-align: left;

  &:hover {
    ${More} {
      background-color: white;
      transition-duration: 1s;
    }

    ${Title} {
      color: white;
      transition-duration: 1s;
    }
  }
`;
