import React from "react";
import PropTypes from "prop-types";

// STYLES
import { List, Item, Hyperlink } from "./styles";

const CreatedPlaylist = ({ data }) => {
  return (
    <List>
      {data.map(({ to, name }) => (
        <Item key={`newPlaylist-${name}`}>
          <Hyperlink exact to={to}>
            {name}
          </Hyperlink>
        </Item>
      ))}
    </List>
  );
};

CreatedPlaylist.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  checkData: (props, propName, componentName) => {
    for (const key in props.data) {
      if (props.data.hasOwnProperty(key)) {
        const element = props.data[key];

        if (element.to === "" && element.name === "") {
          return new Error(
            `Invalid empty property "to" and "name", supplied to "${componentName}" component. Validation Failed`
          );
        } else if (element.to === "" || element.name === "") {
          return new Error(
            `Invalid empty property "to" or "name",  supplied to "${componentName}" component.. Validation Failed`
          );
        }
      }
    }
  }
};

export default CreatedPlaylist;
