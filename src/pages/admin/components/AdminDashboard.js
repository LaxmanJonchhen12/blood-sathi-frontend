import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import Axios from 'axios';
import BloodstockInfo from "./BloodstockInfo";
import TotalInfo from "./TotalInfo";
export default function AdminDashboard(){
    return(
            <DashStyle>
                <div id="container">
                <BloodstockInfo  />
                <TotalInfo />
                </div>
            </DashStyle>
    );
}

const DashStyle = styled.div`
        #container{
            display:flex;
            flex-direction:column;
        }
`;