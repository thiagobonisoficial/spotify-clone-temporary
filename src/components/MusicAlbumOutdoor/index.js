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

const MusicAlbumOutdoor = ({ avatarUrl, musicTitle, musicAuthor }) => {
  return (
    <Container>
      <ContainerController onMouseOver={showPlay} onMouseOut={hidePlay}>
        <MusicPlay theme="musicAlbumOutdoor" />
        <Avatar src={avatarUrl} alt={`${musicTitle} - ${musicAuthor}`} />
      </ContainerController>

      <MusicTitle>{musicTitle}</MusicTitle>
      <MusicAuthor>{musicAuthor}</MusicAuthor>
    </Container>
  );
};

export default MusicAlbumOutdoor;
