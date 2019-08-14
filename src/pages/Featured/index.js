import React, { Fragment, Component } from "react";

// STYLES
import {
  Container,
  ContainerSection,
  ContainerMusicAlbum,
  SectionTitle
} from "./styles";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// SUBCOMPONENT'S
import {
  Sidebar,
  ControllerFooter,
  NavbarSection,
  MusicAlbumOutdoor
} from "components";

class Featured extends Component {
  state = {
    newReleases: [
      {
        avatarUL:
          "https://i.scdn.co/image/e895ad56d0bf3e5e4f12cf6b4a6a630bfba81cc7",
        musicTitle: "Vai Devagar",
        musicAuthor: "Rosa Neon"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/5835ac4a107f8c74258377aa51a850c16437c520",
        musicTitle: "Deixei 2.0",
        musicAuthor: "Mariana Nolasco"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/76b6d402e75144b6c95a93574308cc41a3fe91b2",
        musicTitle: "Música do Mar (Remix)",
        musicAuthor: "Gustavo Fagundes, Paula Fagundes"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/333192c5f5bbf7a053af9e4acc308be2bddb2209",
        musicTitle: "Pra Vida Toda",
        musicAuthor: "Dreicon"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/41ee08b94aeadc8e0b24db60fd2c26f4446ec7f2",
        musicTitle: "Hip Hop Machine #3",
        musicAuthor: "Leo Gandelman, 1Kilo, Machine Series"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/cdbbd7d026d20af417e14a699db7af7600796718",
        musicTitle: "MonTanha-ruSsa",
        musicAuthor: "Lary, Dreicon"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/9cf3f2faa1b9e9d360aed46a77aff4a6385f5ea7",
        musicTitle: "Também Quero",
        musicAuthor: "Clau, Pk"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/b8c9e283cb9d3cd52541b0f0cacca1d95cbf4cf0",
        musicTitle: "Eu sei que Hoje Não Dá",
        musicAuthor: "Aguaceiro"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/0fcd9196b7a12a630fb457f15d9779f9dabee559",
        musicTitle: "Balbúrdia",
        musicAuthor: "Antiética"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/da8de68d4ab830e5a93e355152fa5221b08f65fb",
        musicTitle: "Tanto Faz (Remix)",
        musicAuthor: "DAY, Luccas Carlos"
      },
      {
        avatarUL:
          "https://i.scdn.co/image/2a40cf5ea95b8caf2a1f13cee58b464e10e6ee21",
        musicTitle: "Nada Igual",
        musicAuthor: "Gee Rocha"
      }
    ]
  };

  render = () => {
    return (
      <Fragment>
        <GlobalStyle theme="midnight" />
        <Sidebar />
        <ControllerFooter />
        <Container>
          <NavbarSection />
          <ContainerSection>
            <SectionTitle>New releases</SectionTitle>
            <ContainerMusicAlbum>
              {this.state.newReleases.map(album => {
                return (
                  <MusicAlbumOutdoor
                    key={`${album.musicTitle} - ${album.musicAuthor}`}
                    avatarUrl={album.avatarUL}
                    musicTitle={album.musicTitle}
                    musicAuthor={album.musicAuthor}
                  />
                );
              })}
            </ContainerMusicAlbum>
          </ContainerSection>

          <ContainerSection>
            <SectionTitle>Recently played</SectionTitle>
            <ContainerMusicAlbum>
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
            </ContainerMusicAlbum>
          </ContainerSection>

          <ContainerSection>
            <SectionTitle>Stops</SectionTitle>
            <ContainerMusicAlbum>
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
              <MusicAlbumOutdoor />
            </ContainerMusicAlbum>
          </ContainerSection>
        </Container>
      </Fragment>
    );
  };
}

export default Featured;
