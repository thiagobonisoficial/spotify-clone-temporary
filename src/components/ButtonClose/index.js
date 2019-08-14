import React from "react";

// STYLES
import Close from "./styles";

// SUBCOMPONENT'S
import { Icon } from "components";

const ButtonClose = () => {
  return (
    <Close>
      <Icon theme="close" fontSize="2rem" color="white" hoverColor="red" />
    </Close>
  );
};

export default ButtonClose;
