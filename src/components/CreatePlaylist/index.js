import React from "react";

// STYLES
import { Hyperlink, More, Title } from "./styles";

const CreatePlaylist = () => {
  return (
    <Hyperlink exact to="/playlist/new">
      <More>+</More>
      <Title>Create playlist</Title>
    </Hyperlink>
  );
};

export default CreatePlaylist;
