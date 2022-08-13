import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import Axios from 'axios';
import DonorNav from "./DonorNav";
import Logout from "../../../components/Logout";
import donorContext from "../../../context/donorContext";
export default function DonationHistory(){
    Axios.defaults.withCredentials = true;
    const [donationHistory, setDonationHistory] = useState([]);
    const state = useContext(donorContext);
    let id = state[0];
    console.log(id);

    const  getDonationHistory = async () => {
        const response = await fetch(`http://localhost:3001/donationHistory/${id}`,{
            credentials: "include",
        });
        setDonationHistory(await response.json());
    }

    useEffect(() => {
        getDonationHistory();
    }, [])

    if(donationHistory.length === 0) {
        return(
            <BloodStyle>
                <Logout />
                <div id="container">
                    <div id="nav">
                        <DonorNav />
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
                        <DonorNav />
                        </div>
                        <div id="route">
                        <h2 id="title">My Donation History</h2>
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
                   donationHistory.map((curElm) => {
                       return(
                               <tbody>
                                   <tr>
                                       <td>{curElm.DonatedBlood}</td>
                                       <td>{curElm.DonatedUnit}</td>
                                       <td>{curElm.description}</td>
                                       <td>{curElm.DonationStatus}</td>
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