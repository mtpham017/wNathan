import React, { useRef } from 'react';
import './standBlock.css';

const StandBlock = ({ date, info, label }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Optional: Reset video to the beginning
        }
    };

    return (
        <div className="standBlock" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="dateBlock">
                {date}
                <p className='info'>{info}</p>
            </div>
            <div className="labelBox">
                {label}
            </div>
            <video ref={videoRef} className="backgroundVideo" muted>
                <source src="src\assets\twice_web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default StandBlock;

