import React, { Component } from "react";

// STYLES
import { Menu, Title } from "./styles";

// SERVICES
import { cancelGetAllPlaylist, getAllPlaylist } from "services/Api";

// SUBCOMPONENT'S
import { CreatePlaylist, CreatedPlaylist } from "components";

class MenuPlaylist extends Component {
  state = {
    data: []
  };

  // LIFE CYCLES
  componentDidMount() {
    this.consumeAPI();
  }

  componentWillUnmount() {
    cancelGetAllPlaylist("Request Canceled.");
  }

  // METHODS
  consumeAPI = () => {
    getAllPlaylist().then(({ data }) => {
      this.setState({ data: data });
    });
  };

  render = () => {
    return (
      <Menu>
        <Title>PLAYLISTS</Title>
        <CreatePlaylist />
        <CreatedPlaylist data={this.state.data} />
      </Menu>
    );
  };
}

export default MenuPlaylist;
