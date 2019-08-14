import styled from "styled-components";

const Play = styled.button`
  width: ${props => props.theme.container.width};
  height: ${props => props.theme.container.height};
  display: ${props => props.theme.container.display};
  position: ${props => props.theme.container.position};
  z-index: ${props => props.theme.container.zIndex};
  margin: ${props => props.theme.container.margin};
  background-color: ${props => props.theme.container.bgColor};
  border: ${props => props.theme.container.border};
  border-radius: ${props => props.theme.container.borderRadius};

  &:hover {
    border: ${props => props.theme.container.hover.border};

    i {
      color: ${props => props.theme.icon.hover.color};
    }
  }
`;

export default Play;
