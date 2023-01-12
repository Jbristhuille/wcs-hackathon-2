import React, { useEffect, useState } from 'react';
import "./Cars.scss";
import Model3dPreview from '../Model3dPreview/Model3dPreview'
import axios from "axios";

function Cars() {
    const [card, setCard] = useState([]);
    const [picture, setPicture] = useState(0);
    

    const Cards = () =>{
        axios  
        .get(`${process.env.REACT_APP_SERVER}/cars`, {}) 
        .then((res) => {
            setCard(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    };

    useEffect(() => {
        Cards();
    }, []);

    const changeNext = () => {
        if (picture >= card.length -1) setPicture(0);
        else setPicture(picture+1);
    }

    const changePrev = () => {
        if (picture <= 0) setPicture(card.length -1);
        else setPicture(picture-1);
    }

    return (
        <div>
            {(card && card[picture]) && 
                <div className='CarCard'>
                    <button className='buttonprev'onClick={changePrev}>&#10096;</button>
                    
                    <div className='Car3D'>
                        <Model3dPreview modelUrl={card[picture].view}/>
                    </div>
                    
                    <div className='Stats'>
                        <h2 className='titleH2'>Stats</h2>
                        <h4 className='titleh4'>Modele</h4>
                        <p>{card[picture].model}</p>
                        <h4 className='titleh4'>Consumption</h4>
                        <p>{card[picture].consumption}</p>
                        <h4 className='titleh4'>Place Number</h4>
                        <p>{card[picture].places}</p>
                        <h4 className='titleh4'>Note</h4>
                        <p>{card[picture].comfort}</p>
                    </div>
                    <button className='buttonnext'onClick ={changeNext}>&#10097;</button>
                    <button className='btn'>Validation</button>
                </div>
            }
        </div>
    );
};


export default Cars;