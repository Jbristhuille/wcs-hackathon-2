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
    const [position, setPosition] = useState(null);
    const [data, setData] = useState([]);

    const mapPark = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER}/parks`)
            .then((res) => {
                setPosition([res.data[0].lon, res.data[0].lati]);
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
        <div className="parks-map">
            {(data && position) && 
                <MapContainer style={{width: '100vw', height: '100vh'}} center={position} zoom={14}>
                    <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {data.map((d) => {
                        return(
                            <Marker key={d.id} position={[d.lon, d.lati]}>
                                <Popup className='popup'>
                                    <div className='carte'>
                                        <div className='info'>
                                            <h2>{d.name}</h2>
                                            <h3>{d.city}</h3>
                                        </div>
                                        
                                        <div className="go-button">
                                            <Link to={`/cars?park=${d.id}`}>
                                                Aller au parc
                                            </Link>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        )
                    })}
                </MapContainer> 
            }
        </div> 
    );
};

export default ParksMapPage;