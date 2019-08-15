import React, { Component } from "react";

// STYLES
import {
  Form,
  FormGroupOne,
  FormGroupTwo,
  Label,
  PlaylistName,
  Hyperlink,
  Create
} from "./styles";

class FormNewPlaylist extends Component {
  state = {
    inputValue: ""
  };

  // METHODS
  isDisabled = () => {
    return this.state.inputValue !== "" ? false : true;
  };

  submitForm = e => {
    e.preventDefault();

    if (
      this.state.inputValue.length > 0 &&
      this.state.inputValue.length <= 20
    ) {
      // TODO
    } else {
      // TODO
    }
  };

  render = () => {
    return (
      <Form method="post" onSubmit={this.submitForm} noValidate>
        <FormGroupOne>
          <Label>Playlist Name</Label>
          <PlaylistName
            onChange={e => {
              this.setState({ inputValue: e.target.value });
            }}
            value={this.state.inputValue}
            placeholder="New playlist"
            maxLength="20"
            autoFocus
            required
          />
        </FormGroupOne>

        <FormGroupTwo>
          <Hyperlink exact to="/browse/featured">
            CANCEL
          </Hyperlink>
          <Create type="submit" disabled={this.isDisabled()}>
            CREATE
          </Create>
        </FormGroupTwo>
      </Form>
    );
  };
}

export default FormNewPlaylist;
