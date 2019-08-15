import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000
});

export async function getAlbums() {
  return await instance.get("/albums");
}
