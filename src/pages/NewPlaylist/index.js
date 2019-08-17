import React, { Fragment } from "react";

// STYLES
import { Container, SectionTitle } from "./styles";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// SUBCOMPONENT'S
import { Sidebar, ControllerFooter, FormNewPlaylist } from "components";

const NewPlaylist = () => {
  return (
    <Fragment>
      <GlobalStyle theme="midnight" />
      <Sidebar />
      <ControllerFooter />
      <Container>
        <SectionTitle>Create your new playlist</SectionTitle>
        <FormNewPlaylist />
      </Container>
    </Fragment>
  );
};

export default NewPlaylist;
