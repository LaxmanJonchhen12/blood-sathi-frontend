import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import donorContext from "../../../context/donorContext";
import logindonor from "../../../assets/images/logindonor.svg";
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
        <DonorLoginStyle>
            <Navbar />
            <div id="container">
                <div id="banner">
                    <img src={logindonor} alt="loginsvg" id="svg__admin" />
                </div>
                <div id="login__form">
                    <div id="login__container">
                        <h2 id="title">Donor Login</h2>
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
                        <h3 id="login__status" className="txt">{LoginStatus}</h3>
                        <h3 className="txt">Don't Have An Account <Link to="/registerdonor">Register</Link></h3>
                    </div>    
                </div>
            </div>
        </DonorLoginStyle>
    );
}

const DonorLoginStyle = styled.div`

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

        .txt{
            font-family:monospace;
            font-size:1.2rem;
        }

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
            padding: 1rem 0 1rem 0;
            font-size: 1.3rem;
            color: red;
        }
    }

`;