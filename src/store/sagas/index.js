import { all, takeLatest } from "redux-saga/effects";

// DUCKS AND SAGAS
import { Types as PlaylistsTypes } from "store/ducks/Playlists";
import { getPlaylists } from "./Playlists";

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)]);
}
