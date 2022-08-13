import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../home/components/Banner";
import Features from "../home/components/Features";
import Foooter from "../home/components/Footer";
export default function Home(){
    return(
        <div id = "container">
            <Navbar />
            <Banner />
            <Features />
            <Foooter />
        </div>
    )
}