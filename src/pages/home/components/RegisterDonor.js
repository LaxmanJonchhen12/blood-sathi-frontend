import React, { useState} from "react";
import styled from "styled-components";
import Axios from 'axios';
import Navbar from "../../../components/Navbar";

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
    };
    return(
        <div>
            <Navbar />
            <h3>register Donor</h3>
            <form>
                <label htmlFor ="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="John Doe"
                onChange={(e) => {
                    setnameReg(e.target.value);
                }}
                /> <br />
                <label htmlFor ="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="9823456788"
                 onChange={(e) => {
                    setPhoneReg(e.target.value);
                }}
                /> <br />
                <label htmlFor ="email">Email:</label> 
                <input type="email" id="email" name="email" placeholder="xyz@xyz.com"
                 onChange={(e) => {
                    setEmailReg(e.target.value);
                }}
                /> <br />
                <label htmlFor ="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" placeholder=""
                 onChange={(e) => {
                   setDobReg(e.target.value);
                }}
                /> <br />
                <label htmlFor ="gender">Gender</label>
                <select name="gender" id="Gender"
                 onChange={(e) => {
                    setGenderReg(e.target.value);
                }}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select> <br />
                <label htmlFor ="bloodgroup">Blood Group</label>
                <select name="bloodgroup" id="bloodgroup"
                 onChange={(e) => {
                    setBloodGroupReg(e.target.value);
                }}
                >
                    <option value="apositive"> A Positive A+</option>
                    <option value="anegative">A Negative A-</option>
                    <option value="bpositive">B Positive B+</option>
                    <option value="bnegative">B Negative B-</option>
                    <option value="abpositive">AB Positive AB+</option>
                    <option value="abnegative">AB Negative AB-</option>
                    <option value="opostive">O Positive O+</option>
                    <option value="onegative">O Negative O-</option>
                </select> <br />
                <label htmlFor ="address">Address</label>
                <textarea id="address" name="address" rows="2" cols="50"
                 onChange={(e) => {
                    setAddressReg(e.target.value);
                }}
                ></textarea> <br />
                <label htmlFor ="username">Uesrname</label>
            <input type="text" id="username" name="username"
            onChange={(e) => {
                setUsernameReg(e.target.value);
            }}
            ></input> <br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"
            onChange={(e) => {
                setPaswordReg(e.target.value);
            }}
            ></input> <br />
            <button onClick={register} id="register" name="register">Register</button>
            </form>
        </div>
    );
}