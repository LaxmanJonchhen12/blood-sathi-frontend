import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import donorContext from "../../../context/donorContext";
export default function LoginPatient(){

    const [username, setUsername] = useState('');
    const [password, setPasword] = useState('');
    const [LoginStatus, setLoginStatus] = useState("");
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    const [, setVal] = useContext(donorContext);


    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3001/loginDonor", {
            UserName: username,
            Password: password,
            Id:id,
        }).then((response) => {
            console.log(response.data);
            if(response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                console.log(response.data[0].Id)
                setVal(response.data[0].Id);
                setId(response.data[0].Id);
                goToDonor();

                /*
                currently done using direct routing
                 in future if time will be done using
                 protected route or using local storage
                 */

                // setLoginStatus(response.data[0].UserName);
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/loginPatient").then((response) => {
            if(response.data.LoginStatus === true){
                setVal(response.data[0].Id);
            }
        });
    }, []);

    const goToDonor = () => {
        navigate("/donor");
    }

    return(
        <div>
            <Navbar />
            <h1>Donor Login</h1>
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
            <button onClick={() => {
                login();
            }}>Login</button>
            <h3>Don't Have an Account <Link to="/registerdonor">Register </Link></h3>
            <h1>{LoginStatus}</h1>
        </div>
    );
}