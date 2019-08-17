import axios from "axios";

const CancelToken = axios.CancelToken;
const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000
});

// CANCEL REQUEST'S
export let cancelGetNewReleases;
export let cancelGetAllPlaylist;

// GET'S
export function getNewReleases() {
  return instance.get("/newReleases", {
    cancelToken: new CancelToken(function executor(c) {
      cancelGetNewReleases = c;
    })
  });
}

export function getAllPlaylist() {
  return instance.get("/playlist", {
    cancelToken: new CancelToken(function executor(c) {
      cancelGetAllPlaylist = c;
    })
  });
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
