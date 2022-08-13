import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function DonorNav(){

    return(
            <DonorNavStyle>
                <div id="navbar">
                    <NavLink to="/donor">Home</NavLink>
                    <NavLink to="/donationrequest">Donate Blood</NavLink>
                    <NavLink to="/donationhistory">Donation History</NavLink>
                    <NavLink to="/bloodrequestdonor">Blood Request</NavLink>
                    <NavLink to="/donorbloodrequesthistory">Request History</NavLink>
                </div>
            </DonorNavStyle>
    );
}

const DonorNavStyle = styled.div`

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