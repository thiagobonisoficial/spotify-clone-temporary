import styled from "styled-components";

const Icon = styled.i`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
  font-family: "spotify" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  vertical-align: ${props => props.verticalAlign};
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  text-transform: none;
  line-height: 1;

  :before {
    content: ${props => `"\\${props.theme[props.name]}"`};
  }

  :hover {
    color: ${props => props.hoverColor};
    background-color: ${props => props.hoverBgColor};
  }
`;

export default Icon;
