import React, { useEffect } from 'react';
import QrValidation from '../../components/QrValidition/QrValidation';
import "./QRCodePage.scss";
import axios from 'axios';
import { useState } from 'react';


const QRCodePage = () => {
    const [qr, setQr] = useState();

    useEffect(() => {
       axios
            .post(`${process.env.REACT_APP_SERVER}/qr`, {})
        
            .then((res) => {
                console.log(res.data)
                setQr(res.data)
            })
        
            .catch((err) => {
                console.error(err);
            });
    }, [])

    return (qr &&
        <div className="qr-page">
            <QrValidation hex={qr}/>
        </div>
    );
};

export default QRCodePage;