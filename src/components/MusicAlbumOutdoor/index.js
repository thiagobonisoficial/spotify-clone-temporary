import React from "react";

// STYLES
import {
  Container,
  ContainerController,
  Avatar,
  MusicTitle,
  MusicAuthor
} from "./styles";

// SUBCOMPONENT'S
import { MusicPlay } from "components";

function showPlay(e) {
  e.currentTarget.querySelector("button").style.display = "block";
}

function hidePlay(e) {
  e.currentTarget.querySelector("button").style.display = "none";
}

const MusicAlbumOutdoor = ({ id, title, subtitle, thumbnail }) => {
  return (
    <Container>
      <ContainerController onMouseOver={showPlay} onMouseOut={hidePlay}>
        <MusicPlay theme="musicAlbumOutdoor" />
        <Avatar src={thumbnail} alt={`${title} - ${subtitle}`} />
      </ContainerController>

      <MusicTitle>{title}</MusicTitle>
      <MusicAuthor>{subtitle}</MusicAuthor>
    </Container>
  );
};

export default MusicAlbumOutdoor;
