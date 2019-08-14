import React, { Fragment } from "react";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// SUBCOMPONENT'S
import { LoginHeader, LoginForm, GlobalFooter } from "components";

const Login = () => {
  return (
    <Fragment>
      <GlobalStyle theme="midnight" />
      <LoginHeader />
      <LoginForm />
      <GlobalFooter />
    </Fragment>
  );
};

export default Login;
