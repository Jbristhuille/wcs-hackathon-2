import React from 'react';
import "./Cars.scss";
import Model3dPreview from '../Model3dPreview/Model3dPreview'

const Cars = () => {
    return (
        <div className='CarCard'>
            <div className='Car3D'>
            <Model3dPreview modelUrl="https://sketchfab.com/3d-models/renault-logan-2004-e4f9463f6e004b90bb977d12f6375b9c" />
            </div>
             <h2 className='titleH2'>Stats</h2>
                <h3 className='titleH3'>Consumption and Emission</h3>
                <h3 className='titleH3'>Life Onboard</h3>
                <button className='btn'>Validation</button>
        </div>
    );
};


export default Cars;