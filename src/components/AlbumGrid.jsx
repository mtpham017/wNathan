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
      <AlbumBox name="2014 Forest Hill Drive" details="J.Cole, Hip-Hop/Rap" date="2014" />
      <AlbumBox name="Blonde" details="Frank Ocean, Pop" date="2016" />
      <div className='album-pattern'></div>
    </div>
  );
}

export default AlbumGrid;
