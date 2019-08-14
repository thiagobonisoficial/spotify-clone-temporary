import React, { Component } from "react";

// STYLES
import {
  Form,
  InputContainer,
  Input,
  SubmitForm,
  ErrorMessage,
  UserInfoMessage
} from "./styles";

class LoginForm extends Component {
  state = {};

  render() {
    return (
      <Form>
        <InputContainer>
          <Input placeholder="Username" />
          <ErrorMessage>You entered an invalid username!</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <Input placeholder="Password" />
          <ErrorMessage>You entered an invalid password!</ErrorMessage>
        </InputContainer>
        <SubmitForm>ENTER</SubmitForm>
        <UserInfoMessage>
          To access uses the following username: admin and password: 123456
        </UserInfoMessage>
      </Form>
    );
  }
}

export default LoginForm;
