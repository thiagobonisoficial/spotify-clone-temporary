import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const FormGroupOne = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  padding: 2rem 20rem 2rem 20rem;
  background-color: #282828;
`;

export const FormGroupTwo = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 3rem 0 0 0;
`;

export const Label = styled.label`
  margin: 0 0 0.3rem 0rem;
  font-family: "Circular-Bold";
  color: white;
`;

export const PlaylistName = styled.input`
  font-family: "Circular-Bold";
  font-size: 3rem;
  background-color: transparent;
  color: white;
  border: none;

  &::placeholder {
    color: #535353;
  }
`;

export const Button = styled.button`
  width: 15%;
  height: auto;
  padding: 1rem;
  font-family: "Circular-Book";
  letter-spacing: 0.16em;
  color: white;
  border-radius: 50px;
`;

export const Cancel = styled(Button)`
  margin: 0 2rem 0 0;
  background-color: rgba(24, 24, 24, 0.7);
  border: 2px #b3b3b3 solid;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.2s;
  }
`;

export const Create = styled(Button)`
  background-color: #1db954;
  border: none;

  &:hover {
    transform: scale(1.1);
    background-color: #1ed760;
    transition-duration: 0.2s;
  }
`;
