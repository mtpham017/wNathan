import React from 'react';
import './AlbumGrid.css';

const AlbumGrid = ({ albums }) => {
  return (
    <div className="album-grid">
      {albums.map((album, index) => (
        <div key={index} className="grid-item">
          <div className={`year-box ${album.yearClass}`}>
            {album.year}
          </div>
            <div className={`album-title ${album.titleClass}`}>
              {album.title}
            </div>
            <div className={`album-details ${album.artistGenreClass}`}>
              {album.artistGenre}
            </div>
          
        </div>
      ))}
      <div className="pattern"></div>
    </div>
  );
};

export default AlbumGrid;

