import styled from "styled-components";

// GLOBAL STYLES
import Breakpoint from "styles/Breakpoints";

export const Footer = styled.footer`
  font-family: "Circular-Light";
  width: 100%;
  height: auto;
  bottom: 0;
  padding: 1rem;
  position: fixed;
  text-align: center;
`;

export const Hyperlink = styled.a`
  color: white;

  ${Breakpoint.xs`font-size: .77rem;`}
  ${Breakpoint.sm`font-size: 1rem;`}
`;
