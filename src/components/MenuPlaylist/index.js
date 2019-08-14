import React, { Component } from "react";

// STYLES
import { Menu, Title } from "./styles";

// SUBCOMPONENT'S
import { CreatePlaylist, CreatedPlaylist } from "components";

class MenuPlaylist extends Component {
  state = {
    newPlaylistData: [
      {
        to: "/playlist/:id",
        name: "Test"
      },
      {
        to: "/playlist/:id",
        name: "Test 2"
      },
      {
        to: "/playlist/:id",
        name: "Test 3"
      },
      {
        to: "/playlist/:id",
        name: "Test 4"
      },
      {
        to: "/playlist/:id",
        name: "Test 5"
      },
      {
        to: "/playlist/:id",
        name: "Test 6"
      },
      {
        to: "/playlist/:id",
        name: "Test 7"
      },
      {
        to: "/playlist/:id",
        name: "Test 8"
      },
      {
        to: "/playlist/:id",
        name: "Test 9"
      }
    ]
  };

  render = () => {
    return (
      <Menu>
        <Title>PLAYLISTS</Title>
        <CreatePlaylist />
        <CreatedPlaylist data={this.state.newPlaylistData} />
      </Menu>
    );
  };
}

export default MenuPlaylist;
