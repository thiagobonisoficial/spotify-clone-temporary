import { css } from "styled-components";

const breakpoints = {
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

const Breakpoint = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media only screen and (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;

  return accumulator;
}, {});

export default Breakpoint;
