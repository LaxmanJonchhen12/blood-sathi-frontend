import React, { useState} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import loginadmin from "../../../assets/images/loginadmin.svg";
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
        <AdminLoginStyle>
            <Navbar />
            <div id="container">
                <div id="banner">
                    <img src={loginadmin} alt="loginsvg" id="svg__admin" />
                </div>
                <div id="login__form">
                    <div id="login__container">
                        <h2 id="title">Admin Login</h2>
                        <input 
                        type="text" placeholder="username" className="input" 
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        />
                        <input 
                        type="password" placeholder="password" className="input"
                        onChange={(e) => {
                            setPasword(e.target.value);
                        }}
                        />
                        <button id="button" onClick={login}>Login</button>
                        <h2 id="login__status">{LoginStatus}</h2>
                    </div>    
                </div>
            </div>
        </AdminLoginStyle>
    );
}

const AdminLoginStyle = styled.div`

    #svg__admin{
        height:400px;
        width:400px;
    }

    #container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    #login__container{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        height: 85vh;
        width: 30vw;

        #title{
            font-family:monospace;
            font-size:1.5rem;
            padding:0 0 1.5rem 0;
        }

        .input{
            margin: 0 0 1.2rem 0;
            padding: 0.5rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            border: 1px solid darkgray;
            box-shadow: 2px 3px #d3d3d3;
        }

        #button{
            padding: 0.4rem;
            width: 93px;
            border-radius: 0.8rem;
            border: 2px solid gainsboro;
            background: #0071BC;
            color: white;
            font-weight: bolder;
            font-family: cursive;
            font-size: 1rem;
        }

        #login__status{
            font-family: cursive;
            padding: 1rem 0 0 0;
            font-size: 1.3rem;
            color: red;
        }
    }

`;
