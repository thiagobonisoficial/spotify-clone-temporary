import styled from "styled-components";

// GLOBAL STYLES
import Color from "styles/Colors";

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem 0 1rem;
`;

export const Avatar = styled.img`
  width: 4rem;
  height: auto;
`;

export const MusicTitle = styled.span`
  width: 9.656rem;
  font-family: "Circular-Bold";
  font-size: 0.875rem;
  color: white;
  overflow: hidden;
  white-space: nowrap;
`;

export const AuthorTitle = styled.span`
  width: 13.94rem;
  font-family: "Circular-Book";
  font-size: 0.75rem;
  color: ${Color.greyLight};
  overflow: hidden;
  white-space: nowrap;
`;
