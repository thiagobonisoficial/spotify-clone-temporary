import React from "react";

// STYLES
import Container from "./styles";

// SUBCOMPONENT'S
import { MusicSound, SliderRanger } from "components";

const ControllerSound = () => {
  return (
    <Container>
      <MusicSound />
      <SliderRanger theme="controllerSound" />
    </Container>
  );
};

export default ControllerSound;
