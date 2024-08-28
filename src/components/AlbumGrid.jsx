import React, { useRef } from 'react';
import './AlbumGrid.css';

const AlbumBox = ({ name, details, date, videoSrc }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to the beginning
    }
  };

  return (
    <div 
      className="album-box" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="album-name">{name}</h1>
      <div className="album-info">
        <p className="album-details">{details}</p>
        <p className="album-date">{date}</p>
      </div>
      <video ref={videoRef} className="background-video" muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

function AlbumGrid() {
  return (
    <div className="grid-container">
      <AlbumBox 
        name="2014 Forest Hill Drive" 
        details="J.Cole, Hip-Hop/Rap" 
        date="2014" 
        videoSrc="src\assets\jcole_web.mp4"
      />
      <AlbumBox 
        name="Blonde" 
        details="Frank Ocean, Pop" 
        date="2016" 
        videoSrc="src\assets\frank_web.mp4"
      />
      <div className='album-pattern'></div>
    </div>
  );
}

export default AlbumGrid;
