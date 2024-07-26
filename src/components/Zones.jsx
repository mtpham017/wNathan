import React from 'react';
import './Zones.css';

const Zones = ({ title, date, isReversed }) => {
    return (
        <div className="Zone">
            {isReversed ? (
                <>
                    <div className="date-box">
                        {date}
                    </div>
                    <div className="zone-box">
                        {title}
                    </div>
                </>
            ) : (
                <>
                    <div className="zone-box">
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

export default Zones;
