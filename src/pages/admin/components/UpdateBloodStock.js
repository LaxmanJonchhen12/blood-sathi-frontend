import React, { useState, useEffect} from "react";
import styled from "styled-components";
import Axios from 'axios';
import BloodstockInfo from "./BloodstockInfo";
import NavAdmin from "./NavAdmin";
import Logout from "../../../components/Logout";
export default function UpdateBloodStock(){
    const [newBloodGroup, setBloodGroup] = useState('');
    const [newUnit, setUnit] = useState(0);

    Axios.defaults.withCredentials = true;
    
    const update = () => {
        Axios.post("http://localhost:3001/updateBloodStock", {
           bloodGroup: newBloodGroup,
           unit:newUnit,
        }).then((response) => {
            console.log(response);
        });
    }

    return(
        <UpdateStyle>
            <Logout />
            <div id="container">
                <div id="nav">
                <NavAdmin />
                </div>
            <div id="route">
                <BloodstockInfo />
                <div id="update__container">
                <h3 id="update__txt">Update Blood Unit</h3>
                <form>
                <label htmlFor ="bloodgroup">Blood Group</label>
                <select name="bloodgroup" id="bloodgroup"
                        onChange={(e) => {
                            setBloodGroup(e.target.value);
                        }}
                        class="input"
                        >
                            <option value="apositive"> A Positive A+</option>
                            <option value="anegative">A Negative A-</option>
                            <option value="bpositive">B Positive B+</option>
                            <option value="bnegative">B Negative B-</option>
                            <option value="abpositive">AB Positive AB+</option>
                            <option value="abnegative">AB Negative AB-</option>
                            <option value="opostive">O Positive O+</option>
                            <option value="onegative">O Negative O-</option>
                        </select>
                        <label htmlFor="unit">Unit:</label>
                        <input type="number" id="unit"
                        onChange={(e) => {
                            setUnit(e.target.value);
                        }}
                        class="input"
                        />
                        <button onClick={update} id="update" name="update">Update</button>
                </form>
                </div>
           </div>
           </div>
        </UpdateStyle>
    );
}

const UpdateStyle = styled.div`

#container{
    display:flex;
    #nav{
            flex:15%;
    }

    #route{
        flex:85%;

        #update__container{
                font-size: 1.3rem;
                font-family: monospace;
                text-align: center;
                margin:4rem 0 0 0;

                .input{
                    margin:0 1.5rem 0 1.5rem;
                    padding: 0.5rem;
                    font-size: 1rem;
                }
    
                #update__txt{
                    padding:0 0 2rem 0;
                }

                #update{
                    font-size: 1.2rem;
                    font-family: monospace;
                    text-align: center;
                    background: #007bff;
                    color: white;
                    padding: 0.5rem;
                    border-color: #007bff;
                    border-radius: 0.5rem;
                }
            }

           
    }
}
    
`;