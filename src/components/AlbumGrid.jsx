import React from 'react';
import './AlbumGrid.css';

const AlbumBox = ({ name, details, date }) => (
  <div className="album-box">
    <h1 className="album-name">{name}</h1>
    <div className="album-info">
      <p className="album-details">{details}</p>
      <p className="album-date">{date}</p>
    </div>
  </div>
);

function AlbumGrid() {
  return (
    <div className="grid-container">
      <AlbumBox name="Album 2" details="Artist, Genre" date="20XX" />
      <AlbumBox name="Album 3" details="Artist, Genre" date="20XX" />
      <div className='album-pattern'></div>
    </div>
  );
}

export default AlbumGrid;
