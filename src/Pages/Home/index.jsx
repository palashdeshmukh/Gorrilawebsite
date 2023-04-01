import React from "react";
import Images from "../../Images/index";
import Navbar from "../../Components/Navbar";
import Slider from "../../Components/Section";
import Footer from "../../Components/Footer";
import Cards from "../../Components/Card";
import ContactPage from "../Contact";
import RoadMapPage from "../RoadMap";
import { HomepageMain } from "../../Styles/Home";
const HomePage=()=>{
    return(
    <>
   
    <Slider/>
    <Cards/>
    <RoadMapPage/>
    <ContactPage/> 
</>
    );
};
export default HomePage;