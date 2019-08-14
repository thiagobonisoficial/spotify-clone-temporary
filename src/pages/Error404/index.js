import React, { Fragment } from "react";

// STYLES
import { Main, ErrorMessage } from "./styles";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// SUBCOMPONENT'S
import { GlobalHeader, GlobalFooter } from "components";

const Error404 = () => {
  return (
    <Fragment>
      <GlobalStyle theme="error" />
      <GlobalHeader />
      <Main>
        <ErrorMessage>Sorry, couldn't find that.</ErrorMessage>
      </Main>
      <GlobalFooter />
    </Fragment>
  );
};

export default Error404;
