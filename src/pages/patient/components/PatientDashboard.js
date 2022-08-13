import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import TotalInfoPatient from "./TotalInfoPatient";
export default function PatientDashboard(){
    return(
            <DashStyle>
                <div id="container">
                <TotalInfoPatient />
                </div>
            </DashStyle>
    );
}

const DashStyle = styled.div`
        #container{
            display:flex;
        }
`;