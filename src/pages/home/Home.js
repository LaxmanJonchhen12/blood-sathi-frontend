import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../home/components/Banner";
import Features from "../home/components/Features";
import Foooter from "../home/components/Footer";
import knowyourblood from "../../assets/images/knowyourblood.jpg"
export default function Home(){
    return(
        <div id = "container">
            <Navbar />
            <Banner />
            <Features />
            <img 
            src={knowyourblood} 
            alt="know your blood" 
            style={{
                margin: "0 auto",
                display: "flex",
            }}
            />
            <Foooter />
        </div>
    )
}