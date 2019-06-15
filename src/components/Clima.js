import React from 'react';

const Clima = ({clima}) => {  
    const map = clima && clima.weather ? 
        clima.weather.map((w,i) => {
            return <span key={i}>{w.description}</span>
       }) : 'Loading...'; 
    return (
        <p className="clima">
           {map}
        </p>
    )
};

export default Clima;