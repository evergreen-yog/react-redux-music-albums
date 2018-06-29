import axios from 'axios';

export const fetchAlbums = query =>
  axios.get('http://musicbrainz.org/ws/2/release/', {
    params: {
      query,
      fmt: 'json',
    },
  });
