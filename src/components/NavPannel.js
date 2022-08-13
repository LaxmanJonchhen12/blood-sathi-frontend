import React from "react";
import styled from "styled-components";
export default function NavPanel(){
    return(
            <PannelStyle>
                <div id="navbar">
                    <div id="brand">
                        <h3>Blood Sathi</h3>
                    </div>
                    <div id="content">
                        <h3>Logout</h3>
                    </div>
                </div>
            </PannelStyle>
    );
}

const PannelStyle = styled.div`
    #navbar{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`;