import React from "react";

// STYLES
import {
  Footer,
  Container,
  ContainerControllerOne,
  ContainerControllerTwo
} from "./styles";

// SUBCOMPONENT'S
import {
  MusicAlbum,
  MusicReproduction,
  SaveMusic,
  ShowAlbum,
  ControllerPlayer,
  ControllerTime,
  ControllerSound
} from "components";

const ControllerFooter = () => {
  return (
    <Footer>
      <Container>
        <MusicAlbum />
        <SaveMusic />
        <ShowAlbum />
      </Container>
      <ContainerControllerOne>
        <ControllerPlayer />
        <ControllerTime />
      </ContainerControllerOne>
      <ContainerControllerTwo>
        <MusicReproduction />
        <ControllerSound />
      </ContainerControllerTwo>
    </Footer>
  );
};

export default ControllerFooter;
