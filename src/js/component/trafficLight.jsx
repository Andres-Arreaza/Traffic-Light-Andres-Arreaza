import React, { useState } from 'react';

function TrafficLight() {
    const [activeLight, setActiveLight] = useState(null);

    const handleClick = (color) => {
        setActiveLight(color);
    };

    return (
        <div className="traffic-light-container">
            <div className="traffic-light-pole"></div>
            <div className="traffic-light">
                <div
                    className={`light red ${activeLight === 'red' ? 'active' : ''}`}
                    onClick={() => handleClick('red')}
                ></div>
                <div
                    className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
                    onClick={() => handleClick('yellow')}
                ></div>
                <div
                    className={`light green ${activeLight === 'green' ? 'active' : ''}`}
                    onClick={() => handleClick('green')}
                ></div>
            </div>
        </div>
    );
}

export default TrafficLight;