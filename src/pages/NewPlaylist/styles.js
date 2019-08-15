import styled from "styled-components";

// GLOBAL STYLES
import Scrollbar from "styles/Scrollbar";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
  padding-bottom: 5.3rem;
  background-color: rgba(0, 0, 0, 0.6);

  ${Scrollbar}
`;

export const SectionTitle = styled.h1`
  font-family: "Circular-Bold";
  font-size: 2.25rem;
  color: white;
  margin: 2.5rem 0 0 0.4rem;
`;
