import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

// STYLES AND THEMES
import { BarContainer, Slider, ProgressBarContainer } from "./styles";
import Themes from "./themes";

// UTILS
import { checkThemeName } from "utils/ValidationProps";

const SliderRanger = ({ theme }) => {
  return (
    <ThemeProvider theme={Themes[theme]}>
      <BarContainer>
        <ProgressBarContainer>
          <Slider />
        </ProgressBarContainer>
      </BarContainer>
    </ThemeProvider>
  );
};

SliderRanger.propTypes = {
  theme: PropTypes.string.isRequired,
  checkProps: (propObjValue, funcName, componentName) =>
    checkThemeName(Themes, propObjValue, funcName, componentName)
};

export default SliderRanger;
