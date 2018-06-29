import React, { Component } from 'react';
import { throttle } from 'lodash';

export class Albums extends Component {
  makeFetch = throttle(value => this.props.fetchAlbums(value), 700);

  onClick = id => {
    this.props.toggleSaved(id);
  };

  onChange = event => {
    event.persist();
    this.makeFetch(event.currentTarget.value);
  };

  render() {
    const { releases, count, saved } = this.props;
    return (
      <div>
        <input placeholder="Enter album name" onChange={this.onChange} />
        {count !== null && (
          <div className="count">
            <b>Total found:</b> {count}
          </div>
        )}
        {releases.map(rel => (
          <div
            className={`card ${saved.includes(rel.id) ? ' active' : ''}`}
            onClick={() => this.onClick(rel.id)}
            key={rel.id}
          >
            <div>Title: {rel.title}</div>
            <div>
              Artists:{' '}
              {rel['artist-credit'].map(({ artist }) => artist.name).join(', ')}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
