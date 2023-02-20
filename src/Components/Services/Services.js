import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h1>services</h1>
            <Link to={'/home'}>Home</Link>
        </div>
    );
};

export default Services;