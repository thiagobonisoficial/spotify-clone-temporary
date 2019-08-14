import React, { Component } from "react";

import { Navbar } from "components";

class NavbarSection extends Component {
  state = {
    sections: [
      {
        to: "/browse/featured",
        name: "SPOTLIGHT"
      },
      {
        to: "/browse/podcasts",
        name: "PODCASTS"
      },
      {
        to: "/browse/charts",
        name: "STOPS"
      },
      {
        to: "/browse/genres",
        name: "GENRERS"
      },
      {
        to: "/browse/newreleases",
        name: "LAUNCHES"
      },
      {
        to: "/browse/discover",
        name: "DISCOVER"
      }
    ]
  };

  render = () => {
    return <Navbar informations={this.state.sections} />;
  };
}

export default NavbarSection;
