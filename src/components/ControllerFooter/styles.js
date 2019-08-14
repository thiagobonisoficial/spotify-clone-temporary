import styled from "styled-components";

// GLOBAL STYLES
import Color from "styles/Colors";

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 5;
  bottom: 0%;
  padding: 1rem;
  background-color: ${Color.greyBlack1};
  border-top: 1px solid black;
`;

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
`;

export const ContainerControllerOne = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerControllerTwo = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 0;
`;
