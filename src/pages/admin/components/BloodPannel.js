import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import Axios from 'axios';
import NavAdmin from "./NavAdmin";
import Logout from "../../../components/Logout";
export default function BloodPannel(){
    Axios.defaults.withCredentials = true;
    const [bloodRequestData, setBloodRequestData] = useState([]);
    const [message, setMessage] = useState('');


    const  getBloodRequestData = async () => {
        const response = await fetch('http://localhost:3001/bloodRequestData');
        setBloodRequestData(await response.json());
    }

    const approveRequest = (requestId,bloodGroup,bloodUnit) => {
        Axios.post("http://localhost:3001/acceptBloodRequest", {
                requestId,
                bloodGroup,
                bloodUnit,
        }).then((response) => {
            console.log(response.data);
            console.log(response.data.msg);
            console.log(response.data.condition);
            if(response.data.condition === "unsucess"){
            setMessage(response.data.msg);
            }
            else{
                getBloodRequestData();
            }
        });
    }

    const rejectRequest = (requestId) => {
        Axios.post("http://localhost:3001/rejectBloodRequest", {
                requestId
        }).then((response) => {
            console.log(response.data);
            getBloodRequestData();
        });
    }
    useEffect(() => {
        getBloodRequestData();
    }, [])
    //console.log(bloodRequestData);



    if(bloodRequestData.length === 0) {
        return(
            <BloodStyle>
                <Logout />
                <div id="container">
                    <div id="nav">
                        <NavAdmin />
                    </div>
                    <div id="route">
                    <h2 id="msg">No Blood Request By Patient/Donor</h2>
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
                        <h2 id="title">Blood Requested</h2>
                        <p id="message">{message}</p>
                            <table>
                                <thead>
                                <tr>
                                <th>Patient Name</th>
                                <th>Patient Id</th>
                                <th>Request Id</th>
                                <th>Blood Group</th>
                                <th>Blood Unit (in ml)</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    {
                        bloodRequestData.map((curElm) => {
                            return(
                                    <tbody>
                                        <tr>
                                                <td>{curElm.Name}</td>
                                            <td>{curElm.Id}</td>
                                            <td>{curElm.RequestId}</td>
                                            <td>{curElm.RequestedBlood}</td>
                                            <td>{curElm.RequestedAmount}</td>
                                            <td>{curElm.RequestDescription}</td>
                                            <td>{curElm.RequestStatus}</td>
                                            <td>
                                                <div id="buttons">
                                                <button 
                                                onClick={
                                                    () => approveRequest(
                                                        curElm.RequestId,
                                                        curElm.RequestedBlood,
                                                        curElm.RequestedAmount
                                                        )
                                                    }
                                                    id="approve"
                                                    >
                                                        Approve</button>
                                                <button 
                                                onClick={
                                                    () => rejectRequest(curElm.RequestId)
                                                    }
                                                    id="reject"
                                                    >Reject</button>
                                                    </div>
                                            </td>
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

            #msg{
                font-family: system-ui;
                font-size: 1.3rem;
                padding: 2rem 1rem 1rem 2rem;
            }
    }
}


    #title{
        text-align:center;
        padding:1.5rem 0;
        font-family:system-ui;
        font-weight:bolder;
    }

    #message{
        text-align: center;
        padding: 0 0 1rem 0;
        font-family: system-ui;
        font-weight: bolder;
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