import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import Axios from 'axios';
import PatientNav from "./PatientNav";
import Logout from "../../../components/Logout";
import patientContext from "../../../context/patientContext";
export default function BloodRequestHistory(){
    Axios.defaults.withCredentials = true;
    const [bloodRequestHistory, setbloodRequestHistory] = useState([]);
    const state = useContext(patientContext);
    let id = state[0];
    console.log(id);

    const  getDonationHistory = async () => {
        const response = await fetch(`http://localhost:3001/patientBloodHistory/${id}`,{
            credentials: "include",
        });
        setbloodRequestHistory(await response.json());
    }

    useEffect(() => {
        getDonationHistory();
    }, [])

    if(bloodRequestHistory.length === 0) {
        return(
            <BloodStyle>
                <Logout />
                <div id="container">
                    <div id="nav">
                        <PatientNav />
                    </div>
                    <div id="route">
                    <h2>No Donation History</h2>
                    </div>
                </div>
            </BloodStyle>
        );
    }
    else {
            return (
                <BloodStyle>
                    <Logout />
                    <div id="container">
                        <div id="nav">
                        <PatientNav />
                        </div>
                        <div id="route">
                        <h2 id="title">My Blood Request History</h2>
               <table>
                   <thead>
                       <tr>
                           <th>Blood Group</th>
                           <th>Blood Unit (in ml)</th>
                           <th>Description</th>
                           <th>Status</th>
                       </tr>
                   </thead>
               {
                   bloodRequestHistory.map((curElm) => {
                       return(
                               <tbody>
                                   <tr>
                                       <td>{curElm.RequestedBlood}</td>
                                       <td>{curElm.RequestedAmount}</td>
                                       <td>{curElm.RequestDescription}</td>
                                       <td>{curElm.RequestStatus}</td>
                                    </tr>
                           </tbody>
                       )
                   }
                   )
               }
               </table>
               </div>
               </div>
           </BloodStyle>  
            );
    };
}

const BloodStyle = styled.div`

#container{
    display:flex;
    #nav{
            flex:15%;
    }

    #route{
        flex:85%;
    }
}

    #title{
        text-align:center;
        padding:1.5rem 0;
        font-family:system-ui;
        font-weight:bolder;
    }

    table{
        width: 80%;
        margin: 0px 0 0 3rem;
        font-family: monospace;
        font-weight: 500;
        font-size: 1.2rem;
        border-collapse:collapse;
    }

    tr{
        background: whitesmoke;
    }

    th{
        font-weight:bolder;
        background: lightblue;
    }

    thead{
        background:skyblue;
    }

    td, th{
        padding:8px;
    }

    td{
        text-align:center
    }

`;