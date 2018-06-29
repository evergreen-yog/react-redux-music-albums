import { all, fork } from "redux-saga/effects";
import { watchAlbumsSaga } from "./features/Albums/saga";

export function* rootSaga() {
  yield all([watchAlbumsSaga].map(saga => fork(saga)));
}
