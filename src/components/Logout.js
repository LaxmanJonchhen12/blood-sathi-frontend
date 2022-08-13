import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
export default function Logout(){

    const navigate = useNavigate();

    const goToPatient = () => {
        navigate("/logout");
    }

    return(
            <LogoutStyle>
                <div id="logout">
                    <div id="title">
                        <h3>Blood Bank Management System</h3></div>
                    <div id="logout">
                        <h4 id="logout__text"><Link to="/logout">Logout</Link></h4> 
                        <Link to="/logout">
                        <FontAwesomeIcon icon={faRightFromBracket} id="logout__icon" />
                        </Link>
                    </div>
                </div>
            </LogoutStyle>
    );
}

const LogoutStyle = styled.div`
    #logout{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        background: black;
        height: 3.5rem;
        font-family: monospace;
        font-size: 1.2rem;

        a{
            text-decoration:None;
            color:white;
        }

            #title{
                padding-left: 1.5rem;
            }

            #logout{
                padding-right:1.5rem;
                    #logout__icon{
                        padding-left:1rem;
                    }
            }
    }
`;