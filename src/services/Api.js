import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000
});

// GET'S
export function getNewReleases() {
  return instance.get("/newReleases");
}

export function getPlaylist(name) {
  return instance.get("/playlist", {
    params: {
      name: name
    }
  });
}

// POST'S
export function postNewPlaylist(id, name) {
  return instance.post("/playlist", {
    id: id,
    to: `/playlist/${id}`,
    name: name
  });
}
