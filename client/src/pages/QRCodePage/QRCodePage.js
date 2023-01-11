import React from 'react';
import QrValidation from '../../components/QrValidition/QrValidation';
import "./QRCodePage.scss";


const QRCodePage = () => {
    return (
        <div>
            <QrValidation hex="Coucou"/>
        </div>
    );
};

export default QRCodePage;