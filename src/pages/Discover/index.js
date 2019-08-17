import React, { Fragment } from "react";

// STYLES
import { Container } from "./styles";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// SUBCOMPONENT'S
import {
  NavbarSection,
  MessageWarning
} from "components";

const Discover = () => {
  return (
    <Fragment>
      <GlobalStyle theme="midnight" />
      <Container>
        <NavbarSection />
        <MessageWarning />
      </Container>
    </Fragment>
  );
};

export default Discover;
