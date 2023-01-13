import React from 'react';
import Cars from '../../components/Cars/Cars';
import "./HomePage.scss";

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="card">
                <Cars/>
            </div>
        </div>
    );
};

export default HomePage;