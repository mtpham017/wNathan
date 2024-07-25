import React from 'react';
import './Header.css';

const Header = ({ title, pattern }) => {
    return (
        <div className="header">
            <div className="title-box">
                {title} {/* Render title passed as prop */}
            </div>
            <div className="pattern-box">
                {pattern} {/* Render pattern passed as prop */}
            </div>
        </div>
    );
};

export default Header;
