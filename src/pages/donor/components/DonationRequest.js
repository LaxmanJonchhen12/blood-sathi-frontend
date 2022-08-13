import React, {useState, useContext, useEffect} from "react";
import styled from "styled-components";
import Axios from 'axios';
import donorContext from "../../../context/donorContext";
import Logout from "../../../components/Logout";
import DonorNav from "./DonorNav";
export default function DonationRequest(){

    const [donatedBloodGroup, setDonatedBloodGroup] = useState('');
    const [donatedUnit, setDonatedUnit] = useState('');
    const [donationDescription, setDonationDescription] = useState('');
    const [donorId, setDonorId] = useState(0);
    const state = useContext(donorContext);
    let id = state[0];

    const donateBlood = () => {

        Axios.post("http://localhost:3001/donationrequest", {
            bloodGroup:donatedBloodGroup,
            bloodUnit:donatedUnit,
            bloodDescription:donationDescription,
            donorId:donorId
        }).then((response) => {
            console.log(response);
            console.log(state);
            console.log(id);
        });
    };
    
    useEffect(() => {
        Axios.get("http://localhost:3001/loginDonor").then((response) =>{
            if(response.data.LoginStatus === true){
               setDonorId(response.data.user[0].Id);
            }
        })
    }, [])


    Axios.defaults.withCredentials = true;
    return(
            <Donationstyle>
                <Logout />
                <div id="container">
                        <div id="nav">
                            <DonorNav />
                        </div>
                        <div id="route">
                        {/* <h1>user id {state}</h1>
                <h1>new patient id {donorId}</h1> */}
            <form>
                        <label htmlfor="bloodgroup">
                            Blood Group:
                        </label>
                        <select name="bloodgroup" id="bloodgroup"
                        onChange={(e) => {
                            setDonatedBloodGroup(e.target.value);
                        }}
                        class="input"
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
                            Donated Blood Unit: (in pint):
                        </label>
                        <input type="number" id="requestedunit" name="requestedunit" 
                        placeholder="1 pint"
                        class="input"
                        onChange={(e) => {
                            setDonatedUnit(e.target.value);
                        }}
                        ></input> <br /> <br />
                        <label htmlfor="requestdescription">
                            Donation Description:
                        </label>
                        <textarea 
                        id="requestdescription" 
                        placeholder="Description with donaton details (include if any disease)"
                        name="requestdecription"
                        rows="2" cols="50"
                        onChange={(e) => {
                            setDonationDescription(e.target.value);
                        }}
                        class="input"
                        >
                        </textarea> <br /> <br />
                        <button 
                        onClick={donateBlood}
                        id="donate"
                        >Donate Blood</button>
                    </form>
                    </div>                        
                </div>
            </Donationstyle>
    )
}

const Donationstyle = styled.div`

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

            #donate{
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