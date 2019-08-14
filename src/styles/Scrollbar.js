import { css } from "styled-components";

// GLOBAL STYLES
import Colors from "./Colors";

const Scrollbar = css`
  /* width */
  &::-webkit-scrollbar {
    width: 1rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${Colors.greyLight4};

    &:hover {
      background: ${Colors.greenLight};
    }
  }
`;

export default Scrollbar;
