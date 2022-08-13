import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import Axios from 'axios';
import NavAdmin from "./NavAdmin";
import Logout from "../../../components/Logout";
export default function BloodrequestHistory(){
    Axios.defaults.withCredentials = true;
    const [bloodRequestHistory, setBloodRequestHistory] = useState([]);


    const  getBloodRequestHistory = async () => {
        const response = await fetch('http://localhost:3001/getBloodRequestHistory');
        setBloodRequestHistory(await response.json());
    }

    useEffect(() => {
        getBloodRequestHistory();
    }, [])

    if(bloodRequestHistory.length === 0) {
        return(
            <BloodStyle>
                <Logout />
                <div id="container">
                    <div id="nav">
                        <NavAdmin />
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
                        <NavAdmin />
                        </div>
                        <div id="route">
                        <h2 id="title">Blood Request History</h2>
               <table>
                   <thead>
                       <tr>
                           <th>Patient Name</th>
                           <th>Blood Group</th>
                           <th>Blood Unit (in ml)</th>
                           <th>Description</th>
                           <th>Status</th>
                           <th>Stock Status</th>
                       </tr>
                   </thead>
               {
                   bloodRequestHistory.map((curElm) => {
                    let message;
                    if(curElm.RequestStatus === "accepted"){
                        message = `${curElm.RequestedAmount} Deeducted From Stock`;
                    }
                    else {
                        message = "0 unit added to the stock";
                    }
                       return(
                               <tbody>
                                   <tr>
                                       <td>{curElm.Name}</td>
                                       <td>{curElm.RequestedBlood}</td>
                                       <td>{curElm.RequestedAmount}</td>
                                       <td>{curElm.RequestDescription}</td>
                                       <td>{curElm.RequestStatus}</td>
                                       <td>{message}</td>
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