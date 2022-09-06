import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import logout1 from "../assets/images/logout1.png";
export default function LogoutPage(){
    return(
            <LogoutStyle>
                <div id="container">
                    <div id="nav">
                        <Navbar />
                    </div>
                    <div id="content">
                        <img src={logout1} id="logout" alt="logout" />
                        <h2 class="txt" id="main__txt">You Have Been Logged Out</h2>
                        <h4 class="txt" id="sec__txt">Thank You For Using Our Site</h4>
                    </div>
                </div>
            </LogoutStyle>
    )
}

const LogoutStyle = styled.div`

    #content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin:5rem 0 0 0;

            #logout{
                width: 250px;
            }

            .txt{
                padding:1rem;
                font-family:sans-serif;
            }

            #main__txt{
                font-size:2rem;
            }

            #sec__txt{
                font-size:1.3rem;
            }


    }

`;