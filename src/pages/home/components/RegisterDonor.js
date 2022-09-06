import React, { useState} from "react";
import styled from "styled-components";
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import registerdonor from "../../../assets/images/registerdonor.svg";
import { Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function RegisterDonor(){

    const [nameReg, setnameReg] = useState('');
    const [phoneReg, setPhoneReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [dobReg, setDobReg] = useState('');
    const [genderReg, setGenderReg] = useState('');
    const [bloodGroupReg, setBloodGroupReg] = useState('');
    const [addressReg, setAddressReg] = useState('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPaswordReg] = useState('');

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/registerDonor", {
            Name: nameReg,
            Phone:phoneReg,
            Email:emailReg,
            DOB:dobReg,
            Gender:genderReg,
            BloodGroup:bloodGroupReg,
            Address:addressReg,
            UserName: usernameReg,
            Password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
        toast("Registered Sucessfully Please Login");
    };
    return(
        <DonorRegisterStyle>
            <Navbar />
            <div id="container">
                <div id="banner">
                    <img src={registerdonor} alt="register" id="svg__patient" />
                </div>
                <div id="registerform">
                <h3 id="title">Sign Up As An Donor</h3>
                <form id="form__container">
                <input type="text" id="name" name="name" placeholder="Name"
                className="input"
                onChange={(e) => {
                    setnameReg(e.target.value);
                }}
                
                /> <br />
                <input type="tel" id="phone" name="phone" placeholder="Phone"
                className="input"
                 onChange={(e) => {
                    setPhoneReg(e.target.value);
                }}
                
                /> <br />
                <input type="email" id="email" name="email" placeholder="Email"
                className="input"
                 onChange={(e) => {
                    setEmailReg(e.target.value);
                }}
                /> <br />
                <input type="date" id="dob" name="dob" placeholder="Date of Birth"
                className="input"
                 onChange={(e) => {
                    setDobReg(e.target.value);
                }}
                
                /> <br />
                <select name="gender" id="Gender"
                className="input"
                 onChange={(e) => {
                    setGenderReg(e.target.value);
                }}
                >
                    <option value="Gender">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select> <br />
                <select name="bloodgroup" id="bloodgroup"
                className="input"
                 onChange={(e) => {
                    setBloodGroupReg(e.target.value);
                }}
                >
                    <option value="Blood Group">Blood Group</option>
                    <option value="apositive"> A Positive A+</option>
                    <option value="anegative">A Negative A-</option>
                    <option value="bpositive">B Positive B+</option>
                    <option value="bnegative">B Negative B-</option>
                    <option value="abpositive">AB Positive AB+</option>
                    <option value="abnegative">AB Negative AB-</option>
                    <option value="opostive">O Positive O+</option>
                    <option value="onegative">O Negative O-</option>
                </select> <br />
                <input type="text" id="address" name="address" placeholder="Address"
                className="input"
                 onChange={(e) => {
                    setAddressReg(e.target.value);
                }}
                ></input> <br />
            <input type="text" id="username" name="username" placeholder="Username"
            className="input"
            onChange={(e) => {
                setUsernameReg(e.target.value);
            }}
            
            ></input> <br />
            <input type="password" id="password" name="password" placeholder="Password"
            className="input"
            onChange={(e) => {
                setPaswordReg(e.target.value);
            }}
            ></input> <br />
            <button onClick={register} id="register" name="register">Register</button>
            <h3 className="txt">Already Signed Up ? <Link to="/donorlogin">Login</Link></h3>
            </form>
            </div>
            </div>
        </DonorRegisterStyle>
    );
}

const DonorRegisterStyle = styled.div`

    #svg__patient{
        height:400px;
        width:400px;
    }

    #container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
    
    #title{
        font-family: monospace;
        font-size: 1.5rem;
        padding: 0 0 0.7rem 0;
    }

    #form__container{

        label{
            padding: 0 1.5rem 0 0;
            font-family: cursive
        }

        .input{
            margin: 0 0 0.9rem 0;
            padding: 0.5rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            border: 1px solid darkgray;
            box-shadow: 2px 3px #d3d3d3
        }

        #register{
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
    }

        #registerform{
            margin-top:0.5rem;
        }

        .txt{
            font-family:monospace;
            font-size:1.2rem;
            padding:0.5rem 0 0 0;
        }
    
    }

`;
