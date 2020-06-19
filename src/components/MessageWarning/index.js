import React from "react";

// STYLES
import { Container, Img, Title, Subtitle, Hyperlink } from "./styles";

// GLOBAL STYLES
import Colors from "styles/Colors";

// SUBCOMPONENT'S
import { Icon } from "components";
import UserImg from "assets/images/utils/user.jpg";

const MessageWarning = () => {
  return (
    <Container>
      <Img src={UserImg} />
      <Title>This section was not developed</Title>
      <Subtitle>
        Thank you for being here. By
        <Hyperlink href='https://www.linkedin.com/in/thiagobonisoficial/' rel='noopener noreferrer' target='_blank'>
          Thiago De Bonis
        </Hyperlink>
        .
      </Subtitle>
      <Icon theme='heart' color={Colors.greenLight} margin='1rem 0 0 0' />
    </Container>
  );
};

export default MessageWarning;
