import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import Axios from 'axios';
import DonorNav from "./DonorNav";
import Logout from "../../../components/Logout";
import donorContext from "../../../context/donorContext";
export default function DonorBloodRequestHistory(){
    Axios.defaults.withCredentials = true;
    const [donorBloodHistory, setDonorBloodHistory] = useState([]);
    const state = useContext(donorContext);
    let id = state[0];
    console.log(id);

    const  getDonorBloodHistory = async () => {
        const response = await fetch(`http://localhost:3001/donorBloodHistory/${id}`,{
            credentials: "include",
        });
        setDonorBloodHistory(await response.json());
    }

    console.log("donor blood history is " + donorBloodHistory);

    useEffect(() => {
        getDonorBloodHistory();
    }, [])

    // let styles = {
        
    // }

  

    if(donorBloodHistory.length === 0) {
        return(
            <BloodStyle>
                <Logout />
                <div id="container">
                    <div id="nav">
                        <DonorNav />
                    </div>
                    <div id="route">
                    <h2>No Blood Request History</h2>
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
                        <h2 id="title">My Blood Request History</h2>
               <table>
                   <thead>
                       <tr>
                           <th>Requested Blood Group</th>
                           <th>Requested Blood Unit (in ml)</th>
                           <th>Request Description</th>
                           <th>Request Status</th>
                       </tr>
                   </thead>
               {
                   donorBloodHistory.map((curElm) => {
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