import React from "react";

// STYLES
import { List, Item, Hyperlink } from "./styles";

const CreatedPlaylist = () => {
  return (
    <List>
      <Item>
        <Hyperlink exact to="/playlist/:id">
          Test
        </Hyperlink>
      </Item>
      <Item>
        <Hyperlink exact to="/playlist/:id">
          Test2
        </Hyperlink>
      </Item>
      <Item>
        <Hyperlink exact to="/playlist/:id">
          tst
        </Hyperlink>
      </Item>
      <Item>
        <Hyperlink exact to="/playlist/:id">
          qkekqkqek
        </Hyperlink>
      </Item>
      <Item>
        <Hyperlink exact to="/playlist/:id">
          Test2
        </Hyperlink>
      </Item>
      <Item>
        <Hyperlink exact to="/playlist/:id">
          Test2
        </Hyperlink>
      </Item>
      <Item>
        <Hyperlink exact to="/playlist/:id">
          Test2
        </Hyperlink>
      </Item>
      <Item>
        <Hyperlink exact to="/playlist/:id">
          Test2
        </Hyperlink>
      </Item>
    </List>
  );
};

export default CreatedPlaylist;
