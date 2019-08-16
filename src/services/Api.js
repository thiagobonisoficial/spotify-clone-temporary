import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000
});

export function getNewReleases() {
  return instance.get("/newReleases");
}

export function getRecentlyPlayed() {
  return instance.get("/recentlyPlayed");
}
