import React from "react";

//STYLES
import { Container, Time } from "./styles";

// SUBCOMPONENT'S
import { SliderRanger } from "components";

const ControllerTime = () => {
  return (
    <Container>
      <Time>0:00</Time>
      <SliderRanger theme="controllerTime" />
      <Time>5:55</Time>
    </Container>
  );
};

export default ControllerTime;
