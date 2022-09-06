import React from "react";
import styled from "styled-components";
import bg from "../../../assets/images/bg.svg";
export default function Banner() {
  return (
    <Mainstyle>
      <div id="container">
        <div id="intro">
          <h1 id="intro__txt">
            Solving Your <br /> Blood Problems <br />
            Blood Sathi
          </h1>
        </div>
        <div id="bg">
          <img src={bg} alt="help" id="bg__img" />
        </div>
      </div>
    </Mainstyle>
  );
}

const Mainstyle = styled.div`

    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  #container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    #intro {
      padding-top: 3rem;
      padding-right: 17rem;
      #intro__txt {
        font-weight: bolder;
        font-size: 2.6rem;
        font-family: monospace;
      }
    }

    #bg__img {
      height: 400px;
      width: 400px;
    }
  }
`;
