import React from 'react';

const Temperature = ({temp}) => {
    return (
        <h6>
           {temp && temp.main ? parseFloat(temp.main.temp).toFixed(1) : '0.0'}
           <sup>o</sup>
           <small>C</small>
        </h6>
    )
};

export default Temperature;