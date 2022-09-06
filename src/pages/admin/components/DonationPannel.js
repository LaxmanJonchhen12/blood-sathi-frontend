import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import Axios from 'axios';
import NavAdmin from "./NavAdmin";
import Logout from "../../../components/Logout";
export default function DonationPannel(){
    Axios.defaults.withCredentials = true;
    const [donationRequestData, setDonationRequestData] = useState([]);
    let message;


    const  getDonationRequestData = async () => {
        const response = await fetch('http://localhost:3001/donationRequestData');
        setDonationRequestData(await response.json());
    }

    const approveRequest = (DonationId,DonatedBlood,DonatedUnit) => {
        Axios.post("http://localhost:3001/acceptDonationRequest", {
                DonationId,
                DonatedBlood,
                DonatedUnit,
        }).then((response) => {
            console.log(response.data);
            //  message = `${DonatedUnit} Added to the stock`;
            //  console.log(message);
            getDonationRequestData();
        });
    }

    const rejectRequest = (DonationId) => {
        Axios.post("http://localhost:3001/rejectDonationRequest", {
            DonationId
        }).then((response) => {
            console.log(response.data);
            // message = "0 unit added to the stock";
            // console.log(message);
            getDonationRequestData();
        });
    }
    useEffect(() => {
        getDonationRequestData();
    }, [])
    //console.log(bloodRequestData);



    if(donationRequestData.length === 0) {
        return(
            <DonationStyle>
                <Logout />
                <div id="container">
                    <div id="nav">
                        <NavAdmin />
                    </div>
                    <div id="route">
                        <h2>No Donation Request By Patient/Donor</h2>
                    </div>
                </div>
            </DonationStyle>
        );
    }
    else {
            return (
                <DonationStyle>
                    <Logout />
                    <div id="container">
                        <div id="nav">
                        <NavAdmin />
                        </div>
                        <div id="route">
                        <h3 id="title">Blood Donation Details</h3>
                <table>
                   <thead>
                       <tr>
                           <th>Donor Name</th>
                           <th>Donor Id</th>
                           <th>Doanted Blood Group</th>
                           <th>Donated Blood Unit (in ml)</th>
                           <th>Donation Status</th>
                           <th>Donation Id</th>
                           <th>Description</th>
                           <th>Action</th>
                       </tr>
                   </thead>
               {
                   donationRequestData.map((curElm) => {
                        if (curElm.DonationStatus === "Pending"){
                            message = 
                            <div id="buttons">
                                           <button 
                                           onClick={
                                            () => approveRequest(
                                                curElm.DonationId,
                                                curElm.DonatedBlood,
                                                curElm.DonatedUnit
                                                )
                                            }
                                            id="approve"
                                            >
                                                Approve</button>
                                           <button 
                                           onClick={
                                            () => rejectRequest(curElm.DonationId)
                                            }
                                            id="reject"
                                            >Reject</button>
                            </div>
                            ;
                            console.log(message);
                        }
                        else if(curElm.DonationStatus === "Approved") {
                            message = `${curElm.DonatedUnit} unit Added to the stock`;
                        }
                        else {
                            message = "0 unit added to the stock";
                        }
                       return(
                               <tbody>
                                   <tr>
                                       <td>{curElm.Name}</td>
                                       <td>{curElm.Id}</td>
                                       <td>{curElm.DonatedBlood}</td>
                                       <td>{curElm.DonatedUnit}</td>
                                       <td>{curElm.DonationStatus}</td>
                                       <td>{curElm.DonationId}</td> 
                                       <td>{curElm.description}</td>
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
           </DonationStyle>  
            );
    };
}

const DonationStyle = styled.div`

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
        width: 95%;
        margin: 0px 0 0 2rem;
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
        text-align:center;
    }

    button{
        border: 2px solid blue;
        border-radius: 1rem;
        padding: 0.5rem;
        color: white;
    }

    #approve{
        background:cornflowerblue;
        margin:0 2rem 0 0;
    }

    #reject{
        background:tomato;
    }

    #buttons{
        display:flex;
    }
    
`;