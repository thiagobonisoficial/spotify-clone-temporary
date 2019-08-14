import React, { Fragment } from "react";

// STYLES
import { Container } from "./styles";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// SUBCOMPONENT'S
import { Sidebar, ControllerFooter, MessageWarning } from "components";

const Account = () => {
  return (
    <Fragment>
      <GlobalStyle theme="midnight" />
      <Sidebar />
      <ControllerFooter />
      <Container>
        <MessageWarning />
      </Container>
    </Fragment>
  );
};

export default Account;
