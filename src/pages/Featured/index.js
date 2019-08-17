import React, { Fragment, Component } from "react";

// SERVICES
import { cancelGetNewReleases, getNewReleases } from "services/Api";

// STYLES
import {
  Container,
  ContainerSection,
  ContainerMusicAlbum,
  SectionTitle
} from "./styles";

// GLOBAL STYLES
import { GlobalStyle } from "styles";

// IMAGES
import LoadingIMG from "assets/images/utils/loading.jpg";

// SUBCOMPONENT'S
import { NavbarSection, MusicAlbumOutdoor } from "components";

class Featured extends Component {
  state = {
    loading: {
      newReleases: true,
      skeleton: [
        {
          id: "skeleton-1",
          thumbnail: LoadingIMG
        },
        {
          id: "skeleton-2",
          thumbnail: LoadingIMG
        },
        {
          id: "skeleton-3",
          thumbnail: LoadingIMG
        },
        {
          id: "skeleton-4",
          thumbnail: LoadingIMG
        },
        {
          id: "skeleton-5",
          thumbnail: LoadingIMG
        },
        {
          id: "skeleton-6",
          thumbnail: LoadingIMG
        },
        {
          id: "skeleton-7",
          thumbnail: LoadingIMG
        }
      ]
    },
    newReleases: []
  };

  // LIFE CYCLES
  componentDidMount() {
    this.consumeAPI();
  }

  componentWillUnmount() {
    cancelGetNewReleases("Request Canceled");
  }

  // METHODS
  consumeAPI = () => {
    getNewReleases().then(({ data }) => {
      this.setState({
        loading: { newReleases: false },
        newReleases: data
      });
    });
  };

  renderOutdoor = state => {
    return state.map(({ id, thumbnail, title, subtitle }) => {
      return (
        <MusicAlbumOutdoor
          key={id}
          thumbnail={thumbnail}
          title={title}
          subtitle={subtitle}
        />
      );
    });
  };

  renderLoadingSkeleton = () => {
    return this.state.loading.skeleton.map(({ id, thumbnail }) => {
      return <MusicAlbumOutdoor key={id} thumbnail={thumbnail} />;
    });
  };

  render = () => {
    return (
      <Fragment>
        <GlobalStyle theme="midnight" />
        <Container>
          <NavbarSection />
          <ContainerSection>
            <SectionTitle>New releases</SectionTitle>
            <ContainerMusicAlbum>
              {this.state.loading.newReleases
                ? this.renderLoadingSkeleton()
                : this.renderOutdoor(this.state.newReleases)}
            </ContainerMusicAlbum>
          </ContainerSection>
        </Container>
      </Fragment>
    );
  };
}

export default Featured;
