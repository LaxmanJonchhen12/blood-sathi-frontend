import React, { useState} from "react";
import styled from "styled-components";
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import registerdonor from "../../../assets/images/registerdonor.svg";
import { Link} from "react-router-dom";


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
    const [registerStatus, setRegisterStatus] = useState(``);
    let registerErrorMessages = [];

    Axios.defaults.withCredentials = true;

    
    const register = () => {
        registerErrorMessages = [];

        const nameRegex  = /\d/;
        if(nameReg.length === 0 ) {
            registerErrorMessages.push('User full name is empty');
        } else if ( nameReg.match(nameRegex) ) {
            registerErrorMessages.push("Name should not contain number")
        }

        let numberOnlyRegExp = /\d/g;
        if(phoneReg.length === 0 ) {
            registerErrorMessages.push('User phone number is empty');
        }else if(!phoneReg.match(numberOnlyRegExp) ) {
            registerErrorMessages.push('Phone Number Should contain number only')
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(emailReg.length === 0 ) {
            registerErrorMessages.push('User email address is empty');
        } else if( !emailReg.match(emailRegex) ) {
            registerErrorMessages.push("Please enter valid email");
        }

        if(usernameReg.length === 0 ) {
            registerErrorMessages.push('User user name is empty');
        }

        if(phoneReg.length === 0 ) {
            registerErrorMessages.push('User password is empty');
        }

        if(usernameReg.length <=5) {
            registerErrorMessages.push('User user name should be minimum of 5 characters');
        }

        if(passwordReg.length <=5) {
            registerErrorMessages.push('User password should be minimum of 5 characters');
        }
        
        if(registerErrorMessages.length >0 ) {
            setRegisterStatus( registerErrorMessages.join(" , "));
            return;
        }
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
            setRegisterStatus("Donor Sucessfully Regsisterd");
        });
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
            <button onClick={e => {
                                   e.preventDefault();
                                    register();
                                    } } id="register" name="register">Register</button>
            <p>{registerStatus}</p>
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
            padding:0.5rem 0 2rem 0;
        }
    
    }

`;
