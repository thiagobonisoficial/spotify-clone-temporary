import React from "react";

// STYLES
import {
  Form,
  FormGroupOne,
  FormGroupTwo,
  Label,
  PlaylistName,
  Cancel,
  Create
} from "./styles";

const FormNewPlaylist = () => {
  return (
    <Form>
      <FormGroupOne>
        <Label>Nome da playlist</Label>
        <PlaylistName placeholder="Nova playlist" />
      </FormGroupOne>

      <FormGroupTwo>
        <Cancel type="button">CANCELAR</Cancel>
        <Create type="submit">CRIAR</Create>
      </FormGroupTwo>
    </Form>
  );
};

export default FormNewPlaylist;
