import React from "react";

// STYLES
import Header from "./styles";

// SUBCOMPONENT'S
import { Icon } from "components";

const GlobalHeader = () => {
  return (
    <Header>
      <Icon theme="logo" fontSize="2rem" color="white" hoverColor="white" />
    </Header>
  );
};

export default GlobalHeader;
