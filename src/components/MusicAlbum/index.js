import React from "react";

// STYLES
import {
  Container,
  InformationContainer,
  Avatar,
  MusicTitle,
  AuthorTitle
} from "./styles";

const MusicAlbum = () => {
  return (
    <Container>
      <Avatar
        src="https://i.scdn.co/image/16bca220a86019e33b6eb80068a722234cdb4f09"
        alt=""
      />
      <InformationContainer>
        <MusicTitle>
          A Culpa é do Meu Grau (feat. Zé Neto e Cristiano) - Ao Vivo em
          Brasília
        </MusicTitle>
        <AuthorTitle>
          Diego e Victor Hugo, Zé Neto e Cristiano . Diego e Victor Hugo Ao Vivo
          em Brasília - EP1
        </AuthorTitle>
      </InformationContainer>
    </Container>
  );
};

export default MusicAlbum;
