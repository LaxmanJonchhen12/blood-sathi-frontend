import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import Axios from 'axios';
import patientContext from "../../../context/patientContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate} from '@fortawesome/free-solid-svg-icons';
export default function TotalInfoPatinet(props){
    Axios.defaults.withCredentials = true;
    const [totalData, setTotalData] = useState([]);
    const state = useContext(patientContext);
    let id = state[0];
    


    const  getTotalData= async () => {
        const response = await fetch(`http://localhost:3001/clientSideDataForPatient/${id}`,{
            credentials: "include",
        });
        setTotalData(await response.json());
    }
    useEffect(() => {
        getTotalData();
    }, [])
    console.log(totalData);
    return(
            <TotalStyle>
                 {
                    totalData.map((curElm) => {
                        return(
                            <div id="total__container">
                            <div id="logo">
                            <FontAwesomeIcon icon={faArrowsRotate} class="icon"  /> 
                            </div>
                            <div id="detail">
                                <div id="title">{curElm.title}</div>
                                <div id="data">{curElm.value}</div>
                            </div>
                        </div>  
                        )
                    }
                    )
                } 
            </ TotalStyle>
    );
}

const TotalStyle = styled.div`

    display:flex;
    flex-wrap:wrap;
    margin: 1.5rem 0 0 2rem;

    #total__container{
        height: 7rem;
        width: 15rem;
        display: flex;
        align-items: center;
        border: 2px solid white;
        background: whitesmoke;
        margin:1rem;
        font-family: sans-serif;
        font-size: 1.2rem;
        box-shadow: 5px 5px #cfcfc4;

        #detail{
            padding-left: 1rem;
        }
    }

`;