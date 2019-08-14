import React from "react";

// STYLES
import { List, Item, Hyperlink, Title } from "./styles";

// SUBCOMPONENT'S
import { Icon } from "components";

const MenuList = () => {
  return (
    <List>
      <Item>
        <Hyperlink exact to="/browse/featured">
          <Icon theme="home" padding="1rem" />
          <Title>Home</Title>
        </Hyperlink>
      </Item>
      <Item>
        <Hyperlink exact to="/search/recent">
          <Icon theme="search" padding="1rem" />
          <Title>Search</Title>
        </Hyperlink>
      </Item>
      <Item>
        <Hyperlink exact to="/collection/playlists">
          <Icon theme="books" padding="1rem" />
          <Title>Your Library</Title>
        </Hyperlink>
      </Item>
    </List>
  );
};

export default MenuList;
