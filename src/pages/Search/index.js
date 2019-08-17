import React, { Fragment } from "react";

// STYLES
import { Container } from "./styles";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// SUBCOMPONENT'S
import { MessageWarning } from "components";

const Search = () => {
  return (
    <Fragment>
      <GlobalStyle theme="midnight" />
      <Container>
        <MessageWarning />
      </Container>
    </Fragment>
  );
};

export default Search;
