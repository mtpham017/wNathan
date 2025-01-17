import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    return (
        <nav className="navbar">
            <div className="menu-box">
                <button className="menu-button" onClick={toggleOverlay}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </button>
            </div>

            <div className="navBarPattern"></div>

            {isOverlayVisible && (
                <div className="overlay">
                    <button className="close-button" onClick={toggleOverlay}>X</button>
                    <div className="overlay-content">
                        <a href="/trips">Trips</a>
                        <a href="/albums">Albums</a>
                        <a href="/cinema">Cinema</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;