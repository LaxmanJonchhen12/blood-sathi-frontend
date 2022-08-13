import React, { useState} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Axios from 'axios';
export default function LoginAdmin(){

    const [username, setUsername] = useState('');
    const [password, setPasword] = useState('');
    const [LoginStatus, setLoginStatus] = useState("");

    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            UserName: username,
            Password: password,
        }).then((response) => {
            console.log(response.data);
            if(response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                goToAdmin();
                /*
                currently done using direct routing
                 in future if time will be done using
                 protected route or using local storage
                 */
                // setLoginStatus(response?.data[0].UserName);
            }
        });
    };

    const goToAdmin = () => {
        navigate("/admin");
    }

    return(
        <div>
            <Navbar />
            <h1>admin login</h1>
            <label>Uesrname</label>
            <input type="text"
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            ></input>
            <br />
            <label>Password</label>
            <input type="password"
             onChange={(e) => {
                setPasword(e.target.value);
            }}
            ></input>
            <br />
            <button onClick={login}>Login</button>
            <h1>{LoginStatus}</h1>
        </div>
    );
}