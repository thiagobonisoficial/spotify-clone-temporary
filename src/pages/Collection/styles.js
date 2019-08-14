import styled from "styled-components";

// GLOBAL STYLES
import Scrollbar from "styles/Scrollbar";

export const Container = styled.div`
  width: 83%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: relative;
  padding: 0 0 8.5rem 2rem;
  margin: 0 0 0 14.5rem;

  ${Scrollbar}
`;

export const ContainerSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ContainerMusicAlbum = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const SectionTitle = styled.h1`
  font-family: "Circular-Bold";
  font-size: 2.25rem;
  color: white;
  margin: 1.3rem 0 0 0.4rem;
`;
