import React from "react";

// STYLES
import { Container, Hyperlink, Title } from "./styles";

// SUBCOMPONENT'S
import { Icon } from "components";

const MenuUser = () => {
  return (
    <Container>
      <Hyperlink exact to="/settings/account">
        <Icon theme="user" fontSize="2rem" color="white" margin="0 .7rem 0 0" />
        <Title>THIAGO DE BONIS</Title>
      </Hyperlink>
    </Container>
  );
};

export default MenuUser;
