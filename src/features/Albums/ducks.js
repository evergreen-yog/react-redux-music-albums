import { xor } from 'lodash';

export const initialState = {
  count: null,
  created: null,
  offset: null,
  releases: [],
  saved: [],
};

export const FETCH_ALBUMS = 'albums/FETCH_ALBUMS';
const FETCH_ALBUMS_SUCCESS = 'albums/FETCH_ALBUMS_SUCCESS';
const FETCH_ALBUMS_ERROR = 'albums/FETCH_ALBUMS_ERROR';
const TOGGLE_SAVED = 'albums/TOGGLE_SAVED';

export const fetchAlbums = payload => ({
  type: FETCH_ALBUMS,
  payload,
});

export const fetchAlbumsSuccess = payload => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload,
});

export const fetchAlbumsError = payload => ({
  type: FETCH_ALBUMS_ERROR,
  payload,
});

export const toggleSaved = payload => ({
  type: TOGGLE_SAVED,
  payload,
});

export const albumsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALBUMS_SUCCESS:
      return {
        saved: state.saved,
        ...payload,
      };
    case TOGGLE_SAVED: {
      const newSaved = xor(state.saved, [payload]);
      return {
        ...state,
        saved: newSaved,
      };
    }
    default:
      return state;
  }
};
