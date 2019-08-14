import React from "react";

// STYLES
import Container from "./styles";

// SUBCOMPONENT'S
import {
  MusicAleatory,
  MusicBack,
  MusicPlay,
  MusicAdvanced,
  MusicRepeat
} from "components";

const ControllerPlayer = () => {
  return (
    <Container>
      <MusicAleatory />
      <MusicBack />
      <MusicPlay theme="controllerPlayer" />
      <MusicAdvanced />
      <MusicRepeat />
    </Container>
  );
};

export default ControllerPlayer;
