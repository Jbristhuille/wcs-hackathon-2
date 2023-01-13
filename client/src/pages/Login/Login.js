import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./Login.scss";

const Login = () => {
    const [login, setLogin] = useState("");
    const [passwd, setPasswd] = useState("");

    const navigate = useNavigate();

    const connect = () => {
        axios.post(`${process.env.REACT_APP_SERVER}/users/login`, {
            pseudo: login,
            password: passwd
        }).then((res) => {
            navigate('/parks');
        }).catch((err) => {
            console.error(err);
            alert("Une erreur est survenue");
        });
    };

    return (
        <div className="login-page">
            <div className="card">
                <h2>Connexion</h2>

                <div className="login-item">
                    <label htmlFor="login">Identifiant:</label>
                    <input  id="login"
                            name="login"
                            value={login}
                            type="text"
                            placeholder="ex: myNickname"
                            onKeyDown={(e) => e.key === "Enter" && connect()}
                            onChange={(e) => setLogin(e.target.value)} />
                </div>

                <div className="login-item">
                    <label htmlFor="passwd">Mot de passe:</label>
                    <input  id="passwd"
                            name="passwd"
                            value={passwd}
                            type="password"
                            placeholder="ex: pAssw0r2"
                            onKeyDown={(e) => e.key === "Enter" && connect()}
                            onChange={(e) => setPasswd(e.target.value)} />
                </div>

                <button className="my-button" onClick={connect}>
                    Connexion
                </button>
            </div>
        </div>
    );
};

export default Login;