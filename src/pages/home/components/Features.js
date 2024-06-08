import React from "react";
import styled from "styled-components";
import bg2 from "../../../assets/images/bg2.svg";
export default function Features() {
  return (
    <Mainstyle>
      <div id="container">
        <div id="bg">
          <img src={bg2} alt="product feaures" id="ft__bg" />
        </div>
        <div id="txt">
          <h2 id="txt__heading">Why Blood Sathi</h2>
          <p id="desc">
              In todays time its difficult to get fresh blood in urgent critical situation.
              People have various hassle and difficulties arranging fresh blood in critical situations.
              Blood Sathi aims to solve this problem and aims to provide fresh blood to the people
              in the critical situation when they require.
          </p>
        </div>
      </div>
    </Mainstyle>
  );
}
const Mainstyle = styled.div`
  #container {
    display: flex;
    align-items: center;
    justify-content: space-around;

    #bg #ft__bg {
      height: 400px;
      width: 400px;
    }

    #txt {
      font-family: cursive;
        #txt__heading {
          font-weight: 900;
          font-size: 1.5rem;
          padding: 0 0 1rem 0;
        }

      #desc {
        text-align: justify;
        max-width: 400px;
      }
    }
  }
`;
