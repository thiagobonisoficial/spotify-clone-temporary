import React from "react";
import { ThemeProvider } from "styled-components";

// STYLES AND THEMES
import Play from "./styles";
import Themes from "./themes";

// SUBCOMPONENT'S
import { Icon } from "components";

const MusicPlay = ({ theme }) => {
  return (
    <ThemeProvider theme={Themes[theme]}>
      <Play
        onClick={() => {
          alert("ae");
        }}
      >
        <Icon
          theme="play"
          fontSize={Themes[theme].icon.fontSize}
          color={Themes[theme].icon.color}
          margin={Themes[theme].icon.margin}
        />
      </Play>
    </ThemeProvider>
  );
};

export default MusicPlay;
