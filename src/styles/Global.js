import { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

// FONTS
import { MainFontFace, IconFontFace } from "./Fonts";

// OTHERS
import Reset from "./Reset";
import Color from "./Colors";

const Themes = {
  default: {
    color: Color.greyLight2,
    background: Color.black2
  },
  midnight: {
    color: Color.greyBlack2,
    background: `linear-gradient(to right, ${
      Color.greyBlack2
    }, black), linear-gradient(transparent, black 70%)`
  },
  error: {
    color: "white",
    background: `linear-gradient(85deg, ${Color.red}, ${Color.orange} 60%)`
  }
};

const GlobalStyle = createGlobalStyle`
    ${MainFontFace};
    ${IconFontFace};
    ${Reset};

    body {
        user-select: none;
        overflow-x: hidden !important;
        font-family: 'Circular-Light', 'Circular-Book', 'Circular-Bold', sans-serif;
        color: ${props => Themes[props.theme].color};
        background:${props => Themes[props.theme].background};
        overflow: hidden !important;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
    }
`;

GlobalStyle.defaultProps = {
  theme: "default"
};

GlobalStyle.propTypes = {
  theme: PropTypes.string.isRequired,
  checkThemeName: (props, propName, componentName) => {
    if (Themes[props.theme] === "undefined") {
      return new Error(
        `Invalid theme name "${
          props.theme
        }" supplied to "${componentName}". Validation Failed"`
      );
    }
  }
};

export default GlobalStyle;
