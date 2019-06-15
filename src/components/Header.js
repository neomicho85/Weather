import React from 'react';

const Header = ({city}) => {
    return (
        <h1>
           {city && city.name ? city.name : 'Loading...'}
        </h1>
    )
};

export default Header;