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
            // todo: save user infos on context
            navigate('/parks');
        }).catch((err) => {
            console.error(err);
            alert("Une erreur est survenue");
        });
    };

    return (
        <div className="login-page">
            <div className="login-item">
                <label htmlFor="login">Identifiant:</label>
                <input  id="login"
                        name="login"
                        value={login}
                        type="text"
                        placeholder="ex: toto"
                        onChange={(e) => setLogin(e.target.value)} />
            </div>

            <div className="login-item">
                <label htmlFor="passwd">Mot de passe:</label>
                <input  id="passwd"
                        name="passwd"
                        value={passwd}
                        type="text"
                        placeholder="ex: 123"
                        onChange={(e) => setPasswd(e.target.value)} />
            </div>

            <button onClick={connect}>
                Connexion
            </button>
        </div>
    );
};

export default Login;