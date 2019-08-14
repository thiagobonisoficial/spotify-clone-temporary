import styled from "styled-components";

export const Container = styled.div`
  width: 11rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0 0 0;
`;

export const ContainerController = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 10rem;
  height: 10rem;

  &:hover {
    opacity: 0.1;
    transition-duration: 0.5s;
  }
`;

export const MusicTitle = styled.span`
  width: 10rem;
  margin: 0.6rem 0 0 0;
  font-family: "Circular-Bold";
  font-size: 0.875rem;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: 0.015em;
  text-align: center;
`;

export const MusicAuthor = styled(MusicTitle)`
  margin: 0.3rem 0 0 0;
  color: #a3a0a2;
`;
