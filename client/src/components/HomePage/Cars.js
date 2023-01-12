import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
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
        <div className='ContainerCard'>
            <div className='button'>
                <button className='buttonPrev'onClick={changePrev}>&#10096;</button>
                <button className='buttonNext'onClick ={changeNext}>&#10097;</button>
            </div>
            {(card && card[picture]) && 
                <div className='CarCard'>
                    
                    <div className='Car3D'>
                        <Model3dPreview modelUrl={card[picture].view}/>
                    </div>
                    
                    <div className='Stats'>
                        <h2 className='titleH2'>Stats</h2>
                        <h4 className='titleH4'>Modle</h4>
                        <p className='P'>{card[picture].model}</p>
                        <h4 className='titleH4'>Consommation</h4>
                        <p className='P'>{card[picture].consumption}</p>
                        <h4 className='titleH4'>Nombre de places</h4>
                        <p className='P'>{card[picture].places}</p>
                        <h4 className='titleH4'>Note</h4>
                        <p className='P'>{card[picture].comfort}</p>
                    </div>
                    <Link className='btn' to="/qr">Validation</Link>
                </div>
            }
        </div>
    );
};


export default Cars;