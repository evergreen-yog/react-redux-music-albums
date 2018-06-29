import { createSelector } from 'reselect';

const albumsSelector = state => state.albums || {};

export const releasesSelector = createSelector(
  albumsSelector,
  albums => albums.releases,
);

export const countSelector = createSelector(
  albumsSelector,
  albums => albums.count,
);

export const savedSelector = createSelector(
  albumsSelector,
  albums => albums.saved,
);
