import styled from "styled-components";

// GLOBAL STYLES
import Breakpoint from "styles/Breakpoints";
import Color from "styles/Colors";

export const Form = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;

  ${Breakpoint.sm`width: 90%;`}
  ${Breakpoint.md`width: 70%;`}
  ${Breakpoint.lg`width: 55%;`}
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1rem 0;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 0 0 1rem 0;
  font-family: "Circular-Light";
  font-size: 1rem;
  border: none;
  border-bottom: 1px rgba(192, 192, 192, 0.4) solid;
  background-color: transparent;

  &::placeholder {
    color: black;
  }

  &:hover,
  &:focus {
    color: ${Color.greenLight};
    border-bottom: 1px ${Color.greenLight} solid;

    &::placeholder {
      color: ${Color.greenLight};
    }
  }
`;

export const SubmitForm = styled.button`
  width: 100%;
  height: auto;
  border: none;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
  color: white;
  font-weight: bold;
  background-color: ${Color.greenLight};
  letter-spacing: 0.1rem;

  &:hover {
    transition-duration: 3ms;
    background-color: ${Color.greenLight2};
  }
`;

export const ErrorMessage = styled.small`
  margin: 0.3rem 0 0 0;
  font-size: 1rem;
  color: red;
`;

export const UserInfoMessage = styled.h5`
  color: black;
  text-align: center;
`;
