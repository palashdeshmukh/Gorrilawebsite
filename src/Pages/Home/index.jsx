import React from "react";
import Slider from "../../Components/Section";
import Cards from "../../Components/Card";
import ContactPage from "../Contact";
import RoadMapPage from "../RoadMap";
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