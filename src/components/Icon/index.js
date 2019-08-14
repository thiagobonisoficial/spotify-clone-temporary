import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

// STYLE AND THEMES
import Icon from "./styles";
import Themes from "./themes";

// UTILS
import { checkThemeName } from "utils/ValidationProps";

const SpotifyIcon = ({
  theme,
  fontSize,
  color,
  bgColor,
  hoverColor,
  hoverBgColor,
  verticalAlign,
  margin,
  padding
}) => {
  return (
    <ThemeProvider theme={Themes}>
      <Icon
        name={theme}
        fontSize={fontSize}
        color={color}
        bgColor={bgColor}
        hoverColor={hoverColor}
        hoverBgColor={hoverBgColor}
        verticalAlign={verticalAlign}
        margin={margin}
        padding={padding}
      />
    </ThemeProvider>
  );
};

SpotifyIcon.defaultProps = {
  fontSize: "1.5rem",
  color: "#b3b3b3",
  bgColor: "transparent",
  hoverColor: "#1DB954",
  hoverBgColor: "transparent",
  verticalAlign: "middle",
  margin: "0",
  padding: "0"
};

SpotifyIcon.propTypes = {
  theme: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  verticalAlign: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  checkProps: (propObjValue, funcName, componentName) =>
    checkThemeName(Themes, propObjValue, funcName, componentName)
};

export default SpotifyIcon;
