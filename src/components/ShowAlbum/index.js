import React from "react";

// STYÇES
import Show from "./styles";

// SUBCOMPONENT'S
import { Icon } from "components";

const ShowAlbum = () => {
  return (
    <Show onClick={() => alert("This function is for decoration. 💚")}>
      <Icon theme="showAlbum" fontSize="1rem" />
    </Show>
  );
};

export default ShowAlbum;
