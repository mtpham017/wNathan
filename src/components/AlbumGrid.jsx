import React from 'react';
import './AlbumGrid.css';

const AlbumGrid = ({ albums }) => {
  return (
    <div className="album-grid">
      <div className="grid-item item-large">
        <div className={`year-box ${albums[0].yearClass}`}>
          {albums[0].year}
        </div>
        <div className="album-content">
          <div className={`album-title ${albums[0].titleClass}`}>
            {albums[0].title}
          </div>
          <div className={`album-details ${albums[0].artistGenreClass}`}>
            {albums[0].artistGenre}
          </div>
        </div>
      </div>
      {albums.slice(1).map((album, index) => (
        <div key={index} className="grid-item">
          <div className={`year-box ${album.yearClass}`}>
            {album.year}
          </div>
          <div className="album-content">
            <div className={`album-title ${album.titleClass}`}>
              {album.title}
            </div>
            <div className={`album-details ${album.artistGenreClass}`}>
              {album.artistGenre}
            </div>
          </div>
        </div>
      ))}
      <div className="pattern"></div>
    </div>
  );
};

export default AlbumGrid;

