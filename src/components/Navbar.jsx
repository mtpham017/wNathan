import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="menu-box">
                <button className="menu-button">
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </button>
            </div>

            <div className="pattern-box">
            </div>

        </nav>
    );
};

export default Navbar;
