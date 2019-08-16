import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

// STYLES AND THEMES
import InternalThemes from "./themes";
import {
  Form,
  FormGroup,
  Label,
  ErrorMsg,
  PlaylistName,
  Hyperlink,
  Create
} from "./styles";

// SERVICES AND UTILS
import { getPlaylist, postNewPlaylist } from "services/Api";
import UUID from "utils/GenerateUUID";

// SUBCOMPONENTS
import { LoadingSpinner } from "components";

class FormNewPlaylist extends Component {
  state = {
    inputValue: "",
    buttonIsDisabled: true,
    loading: false,
    hasError: false,
    msgError: "",
    redirect: false
  };

  // METHODS
  onChange = e => {
    this.setState(
      {
        inputValue: e.target.value,
        hasError: false,
        msgError: ""
      },
      () => {
        this.state.inputValue !== ""
          ? this.setState({ buttonIsDisabled: false })
          : this.setState({ buttonIsDisabled: true });
      }
    );
  };

  consumeAPI = () => {
    try {
      this.setState({ loading: true, buttonIsDisabled: true }, () => {
        getPlaylist(this.state.inputValue).then(({ data }) => {
          if (data.length === 0) {
            postNewPlaylist(UUID(), this.state.inputValue).then(() =>
              this.setState({ redirect: true })
            );
          } else {
            this.setState({
              buttonIsDisabled: false,
              loading: false,
              hasError: true,
              msgError: "This playlist already exists, please try another name."
            });
          }
        });
      });
    } catch (error) {
      this.setState({
        buttonIsDisabled: false,
        loading: false,
        hasError: true,
        msgError: error
      });
    }
  };

  renderLoading = () => {
    return <LoadingSpinner theme="button" />;
  };

  renderErrorMsg = () => {
    return <ErrorMsg>{this.state.msgError}</ErrorMsg>;
  };

  render = () => {
    return (
      <Fragment>
        {this.state.redirect ? (
          <Redirect exact to="/browse/featured" />
        ) : (
          <Form method="post" noValidate>
            <FormGroup theme={InternalThemes.formGroupOne}>
              <Label>Playlist Name</Label>
              <PlaylistName
                onChange={e => this.onChange(e)}
                value={this.state.inputValue}
                placeholder="New playlist"
                maxLength="20"
                autoFocus
                required
              />
            </FormGroup>
            <FormGroup theme={InternalThemes.formGroupTwo}>
              <Hyperlink exact to="/browse/featured">
                CANCEL
              </Hyperlink>
              <Create
                type="button"
                onClick={e => this.consumeAPI()}
                disabled={this.state.buttonIsDisabled}
              >
                {this.state.loading ? this.renderLoading() : "CREATE"}
              </Create>
            </FormGroup>

            {this.state.msgError ? this.renderErrorMsg() : null}
          </Form>
        )}
      </Fragment>
    );
  };
}

export default FormNewPlaylist;
