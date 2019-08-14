import styled from "styled-components";

// GLOBAL STYLES
import Colors from "styles/Colors";

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 2px ${Colors.greyLight} solid;
  margin: 3rem 0 0 0;
`;

export const Title = styled.h1`
  font-family: "Circular-Bold";
  font-size: 3rem;
  color: white;
  margin: 1.5rem 0 1.5rem 0;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  color: ${Colors.greyLight};
`;

export const Hyperlink = styled.a`
  margin: 0 0 0 0.3rem;
  color: ${Colors.greyLight};

  &:hover {
    color: white;
  }
`;
