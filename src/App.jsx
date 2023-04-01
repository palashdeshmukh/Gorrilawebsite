import React from "react";
import HomePage from "./Pages/Home";
import ReactDOM from "react-dom/client";
import RoadMapPage from "./Pages/RoadMap";
import ContactPage from "./Pages/Contact";
import BlogPage from "./Pages/Blog";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { JoinDiscord,MydiscrodCircle,JoinDiscordNew } from "./Styles/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App=()=>{
return(
    <React.Fragment>
   
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="roadmap" element={<RoadMapPage/>}/>
            <Route path="contactpage" element={<ContactPage/>}/>
            <Route path="blogpage" element={<BlogPage/>}/>

            <Route/>
        </Routes>
        <JoinDiscord><MydiscrodCircle><i style={{color:"black",fontSize:"35px"}} className="fa-brands fa-discord"/><JoinDiscordNew>Join Discord</JoinDiscordNew></MydiscrodCircle></JoinDiscord>
        <Footer/>
    </BrowserRouter>
    </React.Fragment>
)
};

export default App;

