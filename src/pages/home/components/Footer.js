import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <Footerstyle>
      <div id="footer">Copyright &copy; 2024 Blood Sathi</div>
    </Footerstyle>
  );
}
const Footerstyle = styled.div`
  #footer {
    text-align: center;
    font-family: cursive;
    font-size: 1.2rem;
    padding: 2rem 1rem 2rem 1rem;
  }
`;
