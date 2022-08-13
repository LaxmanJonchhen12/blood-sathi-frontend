import React, {useState,useEffect, useContext} from "react";
import styled from "styled-components";
import Axios from 'axios';
export default function BloodstockInfo(props){
    Axios.defaults.withCredentials = true;
    const [bloodStockData, setBloodStock] = useState([]);

    const  getBloodStockData = async () => {
        const response = await fetch('http://localhost:3001/getBloodStockData');
        setBloodStock(await response.json());
    }
    useEffect(() => {
        getBloodStockData();
    }, [])
    console.log(bloodStockData);

    return(
            <StockStyle>
                {
                    bloodStockData.map((curElm) => {
                        return(
                            <div id="blooinfo__container">
                            <div id="bloodstock__info">
                                <div id="blood__group">
                                    {curElm.bloodGroup}
                                </div>
                                <div id="blood__unit">
                                    {curElm.unit}
                                </div>
                            </div>
                        </div>
                        )
                    }
                    )
                }
            </StockStyle>
    );
}

const StockStyle = styled.div`
display:flex;
flex-wrap:wrap;
margin: 1.5rem 0 0 2rem;
#bloodstock__info{


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
    padding-left: 1rem;
}

#blood__group{
    text-align: right;
    padding: 1.2rem 2rem 0 0;
}

#blood__unit{
    padding: 3rem 0 0rem 1rem;
}

`;