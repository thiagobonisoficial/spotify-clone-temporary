// GLOBAL STYLES
import Color from "styles/Colors";

const Themes = {
  controllerPlayer: {
    container: {
      width: "2.8rem",
      height: "2.8rem",
      display: "block",
      position: "relative",
      zIndex: "0",
      margin: "0",
      border: `1px ${Color.greyLight} solid`,
      borderRadius: "50%",
      bgColor: "transparent",
      color: `${Color.greenLight}`,
      hover: {
        border: `1px ${Color.greenLight} solid`
      }
    },
    icon: {
      fontSize: "1rem",
      color: `${Color.greyLight}`,
      margin: "0 0 0 .2rem",
      hover: {
        color: `${Color.greenLight}`
      }
    }
  },
  musicAlbumOutdoor: {
    container: {
      width: "5rem",
      height: "5rem",
      display: "none",
      position: "absolute",
      zIndex: "2",
      margin: "0",
      border: `2px white solid`,
      borderRadius: "50%",
      bgColor: "transparent",
      color: "white",
      hover: {
        border: `2px ${Color.greenLight} solid`
      }
    },
    icon: {
      fontSize: "2rem",
      color: "white",
      margin: "0 0 .5rem .4rem",
      hover: {
        color: `${Color.greenLight}`
      }
    }
  }
};

export default Themes;
