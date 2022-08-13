import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney} from '@fortawesome/free-solid-svg-icons';
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
export default function Navbar(){
  return(
    <Wrapper>
     <div id="navbar">
      <div id="brand">
      <NavLink to="/">BLOOD SATHI</NavLink>
      </div>
      <div id="list">
      <nav>
      <FontAwesomeIcon icon={faHouseChimney} className="icon" />
      <NavLink to="/">Home</NavLink>
      <FontAwesomeIcon icon={faUserLock} className="icon" />
      <NavLink to="/adminlogin">Admin Login</NavLink>
      <FontAwesomeIcon icon={faUser} className="icon" />
      <NavLink to="/donorlogin">Donor Login</NavLink>
      <FontAwesomeIcon icon={faBed} className="icon" />
      <NavLink to="/patientlogin">Patient Login</NavLink>
      </nav>
      </div>
     </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
padding: 0;
margin: 0;
box-sizing: border-box;
a {
  text-decoration: none;
  color: black;
}
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  font-family: sans-serif;

  #brand {
    padding: 2rem 0 2rem 3rem;
    font-weight: 900;
    font-family: sans-serif;
  }

  #list {
    padding: 0 3rem 0 0;
    font-weight: 600;
    font-family: system-ui;

    a {
      padding: 0 1rem 0 0.5rem;
    }
  }

  .icon{
    font-size:1rem;
  }
}
`;