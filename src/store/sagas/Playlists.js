import { call, put } from "redux-saga/effects";
import API from "services/Api";

// DUCKS
import { Creators as PlaylistsActions } from "store/ducks/Playlists";

export function* getPlaylists() {
  try {
    const response = yield call(API.get, "/playlists");

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (error) {
    console.warn(error);
  }
}
