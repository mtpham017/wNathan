import React from 'react';
import './standBlock.css';

const StandBlock = ({ date, info, label }) => {
    return (
        <div className="standBlock">
            <div className="dateBlock">
                {date} {/* Render date passed as prop */}
                <p className='info'>{info}</p>
            </div>
            <div className="labelBox">
                {label} {/* Render label passed as prop */}
            </div>
        </div>
    );
};

export default StandBlock;