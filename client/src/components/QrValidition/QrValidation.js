import React from "react";
import QRCode from "react-qr-code";
import "./QrValidation.scss"

const QrValidation = ({hex}) => {
    return(
        <div className="QRCode-title">
            <h2>{hex}</h2>
            <div className="QRCode">
                <QRCode value={hex}/>
            </div>
        </div>

    );
}

export default QrValidation;