import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function PatientNav(){

    return(
            <PatientNavStyle>
                <div id="navbar">
                    <NavLink to="/patient">Home</NavLink>
                    <NavLink to="/bloodrequest" >Blood Request</NavLink>
                    <NavLink to="/getPatientBloodRequestHistory">Blood Request History</NavLink>
                </div>
            </PatientNavStyle>
    );
}

const PatientNavStyle = styled.div`

a{
    text-decoration:none;
    color:white;
    padding: 2rem 1rem 0.5rem 1.5rem;
}

#navbar{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    background:#2C3539;
    width: 100%;
    height: 91vh;
    font-family: sans-serif;
    font-weight: bolder;
}
`;