import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import TotalInfoDonor from "./TotalInfoDonor";
import BloodstockInfo from "../../admin/components/BloodstockInfo";
export default function DonorDashboard(){
    return(
            <DashStyle>
                <div id="container">
                    <BloodstockInfo />
                <TotalInfoDonor />
                </div>
            </DashStyle>
    );
}

const DashStyle = styled.div`
        #container{
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
`;