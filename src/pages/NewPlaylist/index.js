import React, { Fragment, Component } from "react";

// STYLES
import { Container, SectionTitle } from "./styles";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// SUBCOMPONENT'S
import {
  Sidebar,
  ControllerFooter,
  ButtonClose,
  FormNewPlaylist
} from "components";

class NewPlaylist extends Component {
  state = {};

  render = () => {
    return (
      <Fragment>
        <GlobalStyle theme="midnight" />
        <Sidebar />
        <ControllerFooter />
        <Container>
          <ButtonClose />
          <SectionTitle>Create your new playlist</SectionTitle>
          <FormNewPlaylist />
        </Container>
      </Fragment>
    );
  };
}

export default NewPlaylist;