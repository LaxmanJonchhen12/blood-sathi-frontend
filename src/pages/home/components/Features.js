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
            Existing Blood managment system in nepal is still traditional and
            outdated. Most blood bank and hospitals still use register and
            papers to record their blood information. Donor and Patient also
            can't properly get necessary blood when needed.Blood sathi takes an
            intiative to change the old traditional system to keep digital
            inventory of blood, help donors and patient creating an platform for
            their all blood needs.
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
