import React from "react";
import styled from "styled-components";
import NavAdmin from "./components/NavAdmin";
import Logout from "../../components/Logout";
import AdminDashboard from "./components/AdminDashboard";
export default function Admin(){
    return(
        <Adminstyle>
            <Logout />
            <div id="container">
                <div id="nav">
                <NavAdmin />
                </div>
                <div id="route">
                    <AdminDashboard />
                </div>
            </div>
        </Adminstyle>    
    );
}

const Adminstyle = styled.div`

    #container{
            display:flex;
            #nav{
                    flex:15%;
            }

            #route{
                flex:85%;
            }
    }
`;