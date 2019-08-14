import React from "react";

// STYLES
import { Container, Img, Title, Subtitle, Hyperlink } from "./styles";

// GLOBAL STYLES
import Colors from "styles/Colors";

// SUBCOMPONENT'S
import { Icon } from "components";

const MessageWarning = () => {
  return (
    <Container>
      <Img src="https://media.licdn.com/dms/image/C4E03AQHxzOUKvoHwpg/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=7_cyZxSDs7c9j6M9quQ5MP6RV63qwEC7DAlY51JtOLM" />
      <Title>This section was not developed</Title>
      <Subtitle>
        Thank you for being here. By
        <Hyperlink
          href="https://www.linkedin.com/in/thiagodebonisoficial/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Thiago De Bonis
        </Hyperlink>
        .
      </Subtitle>
      <Icon theme="heart" color={Colors.greenLight} margin="1rem 0 0 0" />
    </Container>
  );
};

export default MessageWarning;
