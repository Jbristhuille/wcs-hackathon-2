import React from 'react';
import Cars from './Cars';
import "./HomePage.scss";

const HomePage = () => {
    return (
        <div>
            <input className='Search' placeholder='Search...'></input>
            <Cars/>
        </div>
    );
};

export default HomePage;