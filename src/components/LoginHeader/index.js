import React from "react";

// STYLES
import { Header, Message } from "./styles";

// SUBCOMPONENT'S
import { Icon } from "components";

const LoginHeader = () => {
  return (
    <Header>
      <Icon name="logo" fontSize="4rem" color="white" />
      <Message>To continue, sign in to Spotify Clone.</Message>
    </Header>
  );
};

export default LoginHeader;
