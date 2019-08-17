import React from "react";
import { ThemeProvider } from "styled-components";

// STYLES AND THEMES
import Img from "./styles";
import Themes from "./themes";

// IMAGE
import LoadingIMG from "assets/images/utils/loading-spinner.svg";

const LoadingSpinner = ({ theme }) => {
  return (
    <ThemeProvider theme={Themes[theme]}>
      <Img src={LoadingIMG} alt="Loading Spinner" />
    </ThemeProvider>
  );
};

export default LoadingSpinner;
