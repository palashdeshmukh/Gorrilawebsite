import React from "react";
import styled from "styled-components";
import Images from "../../Images";
import { Link } from "react-router-dom";
import { NavbarWrapper,LogoContainer,MainNavbarDiv,MainLogoImage ,NavigationContainer,CommunityConnectContainer,ItemsNavigation,BarLine,ItemNavigationContainer,ItemCommunityConnectCotainer,ItemCommunityConnect,ItemCommunityConnect1,myImage,discord,twitter} from "../../Components-Styles/Navbar";
import { click } from "@testing-library/user-event/dist/click";
;
const myLink ={
    textDecoration: 'none',
}
let clicks=0;
const Click=()=>{
   clicks+=1;
   if(clicks%2!=1){
    document.getElementById("clicks").style.display="none";
   }
   else{
    document.getElementById("clicks").style.display="block";

   }

}
const Navbar=()=>{

    return(
        <>
        <MainNavbarDiv  id="mynavbar">
        {/* This is the Logo Container For the main logo on Navbar*/}
        <NavbarWrapper >
        <LogoContainer>
        <Link to="/"><MainLogoImage src={Images.navbarlogo} alt=""/></Link>
       <BarLine> <i onClick={Click} style={{color:"white",fontSize:"30px",marginLeft:"-40px",marginTop:"20px",}} className="fa-solid fa-bars"></i></BarLine>
        </LogoContainer>
        <NavigationContainer id="clicks">
        {/* This is the Navigation Bar for the Navigating to the Pages */}
            <ItemNavigationContainer>
<ItemsNavigation><Link style={myLink} to="/roadmap">Road Map</Link></ItemsNavigation>
<ItemsNavigation><Link style={myLink} to="/contactpage">Contact</Link></ItemsNavigation>
<ItemsNavigation><Link style={myLink} to="/blogpage">Blog</Link></ItemsNavigation>
            </ItemNavigationContainer>
        </NavigationContainer>
        <CommunityConnectContainer>
        {/* This Container Contains Logo of Community */}
<ItemCommunityConnectCotainer>
    <ItemCommunityConnect><i style={discord} className="fa-brands fa-discord"/></ItemCommunityConnect>
    <ItemCommunityConnect1><i style={twitter} className="fa-brands fa-twitter"/></ItemCommunityConnect1>
</ItemCommunityConnectCotainer>
        </CommunityConnectContainer>

        </NavbarWrapper>
        </MainNavbarDiv>
        </>
    );
};
export default Navbar;