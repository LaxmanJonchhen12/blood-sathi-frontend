import React from "react";
import styled from "styled-components";
import Logout from "../../components/Logout";
import DonorNav from "./components/DonorNav";
import DonorDashboard from "./components/DonorDashboard";
export default function Donor(){
    return(
        <Donorstyle>
            <Logout />
            <div id="container">
                <div id="nav">
                <DonorNav />
                </div>
                <div id="route">
                <DonorDashboard />
                </div>
            </div>
        </Donorstyle>    
    );
}

const Donorstyle = styled.div`

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