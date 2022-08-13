import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import TotalInfoDonor from "./TotalInfoDonor";
export default function DonorDashboard(){
    return(
            <DashStyle>
                <div id="container">
                <TotalInfoDonor />
                </div>
            </DashStyle>
    );
}

const DashStyle = styled.div`
        #container{
            display:flex;
        }
`;