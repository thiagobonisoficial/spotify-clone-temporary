import React from "react";

// STYLES
import { Container, Hyperlink } from "./styles";

const Navbar = ({ informations }) => {
  return (
    <Container>
      {informations.map(info => {
        return (
          <Hyperlink
            key={info.name}
            exact
            to={info.to}
            activeStyle={{ color: "white" }}
          >
            {info.name}
          </Hyperlink>
        );
      })}
    </Container>
  );
};

export default Navbar;
