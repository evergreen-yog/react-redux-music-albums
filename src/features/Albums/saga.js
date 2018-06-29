import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchAlbums } from './api';
import { FETCH_ALBUMS, fetchAlbumsSuccess, fetchAlbumsError } from './ducks';

function* fetchAlbumsSaga({ payload }) {
  try {
    const { data } = yield call(fetchAlbums, payload);
    yield put(fetchAlbumsSuccess(data));
  } catch (e) {
    fetchAlbumsError(e.message);
  }
}

export function* watchAlbumsSaga() {
  yield takeLatest(FETCH_ALBUMS, fetchAlbumsSaga);
}
