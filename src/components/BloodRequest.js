import React, {useState, useContext, useEffect} from "react";
import styled from "styled-components";
import Axios from 'axios';
import patientContext from "../context/patientContext";
import Logout from "./Logout";
import PatientNav from "../pages/patient/components/PatientNav";
export default function BloodRequest(props){

    const [requestedBloodGroup, setRequestedBloodGroup] = useState('');
    const [requestedUnit, setRequestedUnit] = useState('');
    const [requestDescription, setRequestDescription] = useState('');
    const [patientId, setPatientId] = useState(0);
    const state = useContext(patientContext);
    let id = state[0];

    Axios.defaults.withCredentials = true;

    const requestBlood = () => {
        Axios.post("http://localhost:3001/bloodrequest", {
            bloodGroup:requestedBloodGroup,
            bloodUnit:requestedUnit,
            bloodDescription:requestDescription,
            patientId:patientId
        }).then((response) => {
            console.log(response);
            console.log(state);
            console.log("patient id from context"+ id);
            console.log("patient id from fetch state" + patientId);
        });
    };
    
    
    useEffect(() => {
        Axios.get("http://localhost:3001/loginPatient").then((response) =>{
            if(response.data.LoginStatus === true){
               setPatientId(response.data.user[0].Id);
            }
        })
    }, [])

    console.log(state);
    console.log(id);
    console.log("id from patient fetch" + patientId);

    return(
        <Bloodstyle>
            <Logout />
            <div id="container">
                <div id="nav">
                    <PatientNav />
                </div>
                <div id="route">
                    <form>
                        <h1>{props.value}</h1>
                                <label htmlfor="bloodgroup">
                                    Blood Group:
                                </label>
                                <select name="bloodgroup" id="bloodgroup" class="input"
                                onChange={(e) => {
                                    setRequestedBloodGroup(e.target.value);
                                }}
                                >
                                    <option value="apositive"> A Positive A+</option>
                                    <option value="anegative">A Negative A-</option>
                                    <option value="bpositive">B Positive B+</option>
                                    <option value="bnegative">B Negative B-</option>
                                    <option value="abpositive">AB Positive AB+</option>
                                    <option value="abnegative">AB Negative AB-</option>
                                    <option value="opositive">O Positive O+</option>
                                    <option value="onegative">O Negative O-</option>
                                </select> <br /> <br />
                                <label htmlfor="requestedunit">
                                    Required Blood Unit: (in pint):
                                </label>
                                <input type="number" id="requestedunit" name="requestedunit" 
                                placeholder="1pint"
                                class="input"
                                onChange={(e) => {
                                    setRequestedUnit(e.target.value);
                                }}
                                ></input> <br /> <br />
                                <label htmlfor="requestdescription">
                                    Request Description:
                                </label>
                                <textarea 
                                id="requestdescription" 
                                placeholder="Description with location problem and case"
                                name="requestdecription"
                                rows="2" cols="50"
                                class="input"
                                onChange={(e) => {
                                    setRequestDescription(e.target.value);
                                }}
                                >
                                </textarea> <br /> <br />
                                <button onClick={requestBlood} id="request">Request Blood</button>
                            </form>
                </div>
                </div>
        </Bloodstyle>    
    );
};




const Bloodstyle = styled.div`
    
#container{
    display:flex;
    #nav{
            flex:15%;
    }

    #route{
        flex:85%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        background: whitesmoke;

            form{
                background: white;
                padding: 1rem;
                border-radius: 1rem;
                background: white;
                padding: 1rem;
                border-radius: 1rem;
                font-family: cursive;
                font-size: 1.5rem;
                box-shadow: 5px 5px #cfcfc4;
                margin: 3rem 0 0 3rem;
            }

            .input{
                margin-left:1.3rem;
                padding: 0.3rem;
                font-size: 1rem;
                background:whitesmoke;
                font-family: cursive;
            }

            #request{
                padding: 0.7rem;
                background: tomato;
                color: white;
                border-radius: 1rem;
                border: 2px solid white;
                font-size: 1rem;
                font-family: cursive;
                font-weight:bolder;
            }
    }
}

`;