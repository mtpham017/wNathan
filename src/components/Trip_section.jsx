import React from 'react';
import './Trip-section.css';

const Trip = ({ title, date, isReversed }) => {
    return (
        <div className="trip-sec">
            {isReversed ? (
                <>
                    <div className="date-box">
                        {date}
                    </div>
                    <div className="trip-box">
                        {title}
                    </div>
                </>
            ) : (
                <>
                    <div className="trip-box">
                        {title}
                    </div>
                    <div className="date-box">
                        {date}
                    </div>
                </>
            )}
        </div>
    );
};

export default Trip;
