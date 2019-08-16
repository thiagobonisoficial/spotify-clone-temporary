import styled from "styled-components";
import { NavLink } from "react-router-dom";

// GLOBAL STYLES
import Colors from "styles/Colors";

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: ${props => props.theme.flexDirection};
  justify-content: ${props => props.theme.justifyContent};
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
  background-color: ${props => props.theme.bgColor};
`;

export const Label = styled.label`
  margin: 0 0 0.3rem 0rem;
  font-family: "Circular-Bold";
  color: white;
`;

export const ErrorMsg = styled.span`
  width: 30rem;
  height: auto;
  padding: 1rem;
  font-family: "Circular-Book";
  border: 1px red dashed;
  color: red;
  text-align: center;
  margin: 0 auto;
`;

export const PlaylistName = styled.input`
  font-family: "Circular-Bold";
  font-size: 3rem;
  background-color: transparent;
  color: white;
  border: none;

  &::placeholder {
    color: ${Colors.greyBlack3};
  }
`;

export const Hyperlink = styled(NavLink)`
  width: 15%;
  height: auto;
  padding: 1rem;
  font-family: "Circular-Book";
  letter-spacing: 0.16em;
  color: white;
  margin: 0 2rem 0 0;
  background-color: ${Colors.greyBlack3};
  border: 2px ${Colors.greyLight} solid;
  border-radius: 50px;
  text-align: center;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.2s;
  }
`;

export const Create = styled.button`
  width: 15%;
  height: auto;
  padding: 1rem;
  font-family: "Circular-Book";
  letter-spacing: 0.16em;
  color: white;
  background-color: ${Colors.greenLight};
  border-radius: 50px;
  border: none;

  &:disabled {
    background-color: ${Colors.greyLight};
  }

  &:not(:disabled) {
    &:hover {
      transform: scale(1.1);
      background-color: ${Colors.greenLight2};
      transition-duration: 0.2s;
    }
  }
`;
