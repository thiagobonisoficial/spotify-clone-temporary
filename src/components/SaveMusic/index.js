import React from "react";

// STYÇES
import Save from "./styles";

// SUBCOMPONENT'S
import { Icon } from "components";

const SaveMusic = () => {
  return (
    <Save
      onClick={() => {
        alert("ae");
      }}
    >
      <Icon theme="heart" fontSize="1rem" />
    </Save>
  );
};

export default SaveMusic;
