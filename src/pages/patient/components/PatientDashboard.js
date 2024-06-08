import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import TotalInfoPatient from "./TotalInfoPatient";
import BloodstockInfo from "../../admin/components/BloodstockInfo";
export default function PatientDashboard(){
    return(
            <DashStyle>
                <div id="container">
                <BloodstockInfo />
                <TotalInfoPatient />
                </div>
            </DashStyle>
    );
}

const DashStyle = styled.div`
        #container{
            display:flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }
`;