import { connect } from 'react-redux';
import { Albums } from './Albums';
import { releasesSelector, countSelector, savedSelector } from './selectors';
import { fetchAlbums, toggleSaved } from './ducks';

const mapStateToProps = state => ({
  releases: releasesSelector(state),
  count: countSelector(state),
  saved: savedSelector(state),
});

const mapDispatchToProps = { fetchAlbums, toggleSaved };

export const AlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Albums);
