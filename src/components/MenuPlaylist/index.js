import React from "react";

// STYLES
import { Menu, Title } from "./styles";

// SUBCOMPONENT'S
import { CreatePlaylist, CreatedPlaylist } from "components";

const MenuPlaylist = () => {
  return (
    <Menu>
      <Title>PLAYLISTS</Title>
      <CreatePlaylist />
      <CreatedPlaylist />
    </Menu>
  );
};

export default MenuPlaylist;
