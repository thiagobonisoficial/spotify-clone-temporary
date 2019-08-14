import React, { Component } from "react";

// STYLES
import { List, Item, Hyperlink, Title } from "./styles";

// SUBCOMPONENT'S
import { Icon } from "components";

class MenuList extends Component {
  state = {
    home: {
      isActived: true
    },
    search: {
      isActived: false
    },
    yourLibrary: {
      isActived: false
    }
  };

  // LIFE CYCLES
  UNSAFE_componentWillMount() {
    this.changeStates();
  }

  // METHODS
  changeStates = () => {
    let pathname = window.location.pathname;

    new RegExp("browse").test(pathname)
      ? this.setState({ home: { isActived: true } })
      : this.setState({ home: { isActived: false } });

    new RegExp("search").test(pathname)
      ? this.setState({ search: { isActived: true } })
      : this.setState({ search: { isActived: false } });

    new RegExp("collection").test(pathname)
      ? this.setState({ yourLibrary: { isActived: true } })
      : this.setState({ yourLibrary: { isActived: false } });
  };

  activeHyperlink = () => {
    return this.state.home.isActived ? "active" : null;
  };

  render = () => {
    return (
      <List>
        <Item>
          <Hyperlink
            exact
            to="/browse/featured"
            className={this.activeHyperlink()}
          >
            {this.state.home.isActived ? (
              <Icon theme="homeSelected" padding="1rem" />
            ) : (
              <Icon theme="home" padding="1rem" />
            )}
            <Title>Home</Title>
          </Hyperlink>
        </Item>
        <Item>
          <Hyperlink exact to="/search/recent">
            {this.state.search.isActived ? (
              <Icon theme="searchSelected" padding="1rem" />
            ) : (
              <Icon theme="search" padding="1rem" />
            )}
            <Title>Search</Title>
          </Hyperlink>
        </Item>
        <Item>
          <Hyperlink exact to="/collection/playlists">
            {this.state.yourLibrary.isActived ? (
              <Icon theme="booksSelected" padding="1rem" />
            ) : (
              <Icon theme="books" padding="1rem" />
            )}
            <Title>Your Library</Title>
          </Hyperlink>
        </Item>
      </List>
    );
  };
}

export default MenuList;
