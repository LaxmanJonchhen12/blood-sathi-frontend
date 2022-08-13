import React, { useContext } from "react";
import styled from "styled-components";
import PatientNav from "./components/PatientNav";
import Axios from 'axios';
import Logout from "../../components/Logout";
import PatientDashboard from "./components/PatientDashboard";
export default function Patient(){
    return(
        <Patientstyle>
            <Logout />
            <div id="container">
                <div id="nav">
                    <PatientNav />
                </div>
                <div id="route">
                    <PatientDashboard />
                </div>
            </div>
        </Patientstyle>
    );
}

const Patientstyle = styled.div`

#container{
    display:flex;
    #nav{
            flex:15%;
    }

    #route{
        flex:85%;
    }
}

`;