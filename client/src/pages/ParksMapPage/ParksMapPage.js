import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "./ParksMapPage.scss";
import axios from "axios"

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const ParksMapPage = () => {
    const position = [47.20568313589866, -1.5484420808474708];
    const [data, setData] = useState([])

    const mapPark = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER}/parks`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        mapPark();
    }, []);

    return (
        <>
            <MapContainer style={{width: '100vw', height: '100vh'}} center={position} zoom={14}>
                <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <input placeholder='oinsa'></input>
                                
                {data.map((d) => {
                    return(
                        <Marker key={d.id} position={[d.lon, d.lati]}>
                            <Popup className='popup'>
                                <div className='carte'>
                                    <div className='info'>
                                        <h2>{d.name}</h2>
                                        <h3>{d.city}</h3>
                                    </div>
                                        <Link to={`/cars/`}>
                                            <p>Aller au parc</p>
                                        </Link>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>   
        </> 
    );
};

export default ParksMapPage;