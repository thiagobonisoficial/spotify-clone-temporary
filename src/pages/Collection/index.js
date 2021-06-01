import React, { Fragment, Component } from "react";

// STYLES
import {
  Container,
  ContainerSection,
  ContainerMusicAlbum,
  SectionTitle,
} from "./styles";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// SUBCOMPONENT'S
import { MusicAlbumOutdoor } from "components";

import RosaNeon from "assets/images/albums/collections/e895ad56d0bf3e5e4f12cf6b4a6a630bfba81cc7.jpeg";
import MarianaNolasco from "assets/images/albums/collections/5835ac4a107f8c74258377aa51a850c16437c520.jpeg";
import GustavoFagundes from "assets/images/albums/collections/76b6d402e75144b6c95a93574308cc41a3fe91b2.jpeg";
import Dreicon from "assets/images/albums/collections/33192c5f5bbf7a053af9e4acc308be2bddb2209.jpeg";
import LeoGandelman from "assets/images/albums/collections/41ee08b94aeadc8e0b24db60fd2c26f4446ec7f2.jpeg";
import Lary from "assets/images/albums/collections/cdbbd7d026d20af417e14a699db7af7600796718.jpeg";
import Clau from "assets/images/albums/collections/9cf3f2faa1b9e9d360aed46a77aff4a6385f5ea7.jpeg";
import Aguaceiro from "assets/images/albums/collections/b8c9e283cb9d3cd52541b0f0cacca1d95cbf4cf0.jpeg";
import Antiética from "assets/images/albums/collections/0fcd9196b7a12a630fb457f15d9779f9dabee559.jpeg";
import DAY from "assets/images/albums/collections/da8de68d4ab830e5a93e355152fa5221b08f65fb.jpeg";
import GeeRocha from "assets/images/albums/collections/2a40cf5ea95b8caf2a1f13cee58b464e10e6ee21.jpeg";

class Collection extends Component {
  state = {
    newReleases: [
      {
        avatar: RosaNeon,
        title: "Vai Devagar",
        author: "Rosa Neon",
      },
      {
        avatar: MarianaNolasco,
        title: "Deixei 2.0",
        author: "MarianaNolasco",
      },
      {
        avatar: GustavoFagundes,
        author: "Gustavo Fagundes, Paula Fagundes",
      },
      {
        avatar: Dreicon,
        title: "Pra Vida Toda",
        author: "Dreicon",
      },
      {
        avatar: LeoGandelman,
        title: "Hip Hop Machine #3",
        author: "Leo Gandelman, 1Kilo, Machine Series",
      },
      {
        avatar: Lary,
        title: "MonTanha-ruSsa",
        author: "Lary, Dreicon",
      },
      {
        avatar: Clau,
        title: "Também Quero",
        author: "Clau, Pk",
      },
      {
        avatar: Aguaceiro,
        title: "Eu sei que Hoje Não Dá",
        author: "Aguaceiro",
      },
      {
        avatar: Antiética,
        musicTitle: "Balbúrdia",
        author: "Antiética",
      },
      {
        avatar: DAY,
        musicTitle: "Tanto Faz (Remix)",
        author: "DAY, Luccas Carlos",
      },
      {
        avatar: GeeRocha,
        title: "Nada Igual",
        author: "Gee Rocha",
      },
    ],
  };

  render = () => {
    return (
      <Fragment>
        <GlobalStyle theme="midnight" />
        <Container>
          <ContainerSection>
            <SectionTitle>Saved playlists</SectionTitle>
            <ContainerMusicAlbum>
              {this.state.newReleases.map(({ avatar, title, author }) => {
                return (
                  <MusicAlbumOutdoor
                    key={`musicAlbumOutdoor-${title}-${author}`}
                    thumbnail={avatar}
                    title={title}
                    subtitle={author}
                  />
                );
              })}
            </ContainerMusicAlbum>
          </ContainerSection>
        </Container>
      </Fragment>
    );
  };
}

export default Collection;
