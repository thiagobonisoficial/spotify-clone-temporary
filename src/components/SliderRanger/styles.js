import styled from "styled-components";

// GLOBAL STYLES
import Color from "styles/Colors";

export const BarContainer = styled.div`
  width: 100%;
  height: 0.3rem;
  background-color: ${Color.greyBlack};
  border-radius: 2px;
  margin: ${props => props.theme.margin};
`;

export const Slider = styled.div`
  cursor: pointer;
  width: 0.75rem;
  max-width: 0.75rem;
  height: 0.75rem;
  position: absolute;
  visibility: hidden;
  left: 100%;
  margin: -0.21rem 0 0 0;
  background-color: white;
  border-radius: 50%;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 0.3rem;
  position: relative;
  background-color: ${Color.greyLight};
  border-radius: 2px;

  :hover {
    background-color: ${Color.greenLight2};

    ${Slider} {
      visibility: visible;
    }
  }
`;
