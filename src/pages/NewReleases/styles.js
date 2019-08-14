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
  padding: 0 1rem 8.5rem 2rem;
  margin: 0 0 0 14.5rem;

  ${Scrollbar}
`;
