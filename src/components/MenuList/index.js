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
  componentDidMount() {
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

  changeIcons = themeName => {
    switch (themeName) {
      case "home":
        return this.state.home.isActived ? "homeSelected" : "home";
      case "search":
        return this.state.search.isActived ? "searchSelected" : "search";
      case "books":
        return this.state.yourLibrary.isActived ? "booksSelected" : "books";
      default:
        return new Error("Invalid Theme Name!");
    }
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
            <Icon theme={this.changeIcons("home")} padding="1rem" />
            <Title>Home</Title>
          </Hyperlink>
        </Item>
        <Item>
          <Hyperlink exact to="/search/recent">
            <Icon theme={this.changeIcons("search")} padding="1rem" />
            <Title>Search</Title>
          </Hyperlink>
        </Item>
        <Item>
          <Hyperlink exact to="/collection/playlists">
            <Icon theme={this.changeIcons("books")} padding="1rem" />
            <Title>Your Library</Title>
          </Hyperlink>
        </Item>
      </List>
    );
  };
}

export default MenuList;
