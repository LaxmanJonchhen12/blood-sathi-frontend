import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa4, fa5, faHouseChimney} from '@fortawesome/free-solid-svg-icons';
export default function NavAdmin(){
    Axios.defaults.withCredentials = true;

    const getBloodRequestData = () => {
        Axios.get("http://localhost:3001/bloodrequest").then((response) =>{
            if(response.data.LoginStatus === true){
                console.log(response);
            }
        })
    }

    return(
        <AdminNavStyle>
        <div id="navbar">
            <NavLink to="/admin">Home</NavLink>
            <NavLink to="/bloodpannel">Blood Request</NavLink>
            <NavLink to="/donationpannel">Donations</NavLink>
            <NavLink to="/bloodrequesthistory">Request History</NavLink>
            <NavLink to="/updatebloodstock">Blood Stock</NavLink>
        </div>
        </AdminNavStyle>
    );
}

const AdminNavStyle = styled.div`
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