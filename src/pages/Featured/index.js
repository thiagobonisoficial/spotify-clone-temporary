import React, { Fragment, Component } from "react";

// SERVICES
import { getAlbums } from "services/Api";

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
    newReleases: [],
    recentlyPlayed: []
  };

  // LIFE CYCLES
  UNSAFE_componentWillMount() {
    getAlbums()
      .then(({ data: { newReleases, recentlyPlayed } }) => {
        this.setState({
          newReleases: [...newReleases],
          recentlyPlayed: [...recentlyPlayed]
        });
      })
      .catch(error => {
        console.warn(error);
        this.setState({
          newReleases: [],
          recentlyPlayed: []
        });
      });
  }

  componentDidMount() {
    // console.log(this.state);
  }

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
              {this.state.newReleases.map(
                ({ id, title, subtitle, thumbnail }) => {
                  return (
                    <MusicAlbumOutdoor
                      key={id}
                      thumbnail={thumbnail}
                      title={title}
                      subtitle={subtitle}
                    />
                  );
                }
              )}
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
