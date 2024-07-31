import React from 'react';
import './MovieGrid.css';
import Lalaland from '../assets/Lalaland.jpg';
import Interstellar from '../assets/Interstellar.jpg';
import Hometown from '../assets/hometown.jpg';

const MovieBox = ({ name, details, date, backgroundImage }) => (
  <div className="movie-box" style={{ '--background-image': `url(${backgroundImage})` }}>
    <h1 className="movie-name">{name}</h1>
    <p className="movie-details">{details}</p>
    <div className="movie-info">
      <p className="movie-date">{date}</p>
    </div>
  </div>
);

function MovieGrid() {
  return (
    <div className="movie-container">
      <MovieBox 
        name="Movie 1" 
        details="Director, Genre" 
        date="20XX" 
        backgroundImage={Hometown} 
      />
      <MovieBox 
        name="Interstellar" 
        details="Director, Genre" 
        date="20XX" 
        backgroundImage={Interstellar} 
      />
      <MovieBox 
        name="Hometown Cha Cha Cha" 
        details="Director, Genre" 
        date="20XX" 
        backgroundImage={Hometown} 
      />
      <MovieBox 
        name="Movie 4" 
        details="Director, Genre" 
        date="20XX" 
        backgroundImage={Hometown} // Add another image or use existing
      />
    </div>
  );
}

export default MovieGrid;


