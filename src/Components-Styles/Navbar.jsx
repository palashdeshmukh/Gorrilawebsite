import styled from "styled-components";
export const MainNavbarDiv=styled.div`
position: static;
position: -webkit-sticky;
width: 100%;
position:fixed;
top: 0;
z-index: 1;


`

export const NavbarWrapper=styled.div`
position: fixed;
display: flex;
width: 100%;
padding-top:10px;
padding-bottom:10px;
flex-direction: row;
flex-wrap:nowrap;
justify-content:space-between;
@media (max-width:375px){
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px;

}

`

export const LogoContainer=styled.div`
width: 100px;
height: 85px;
display: block;
position: relative;
left: 45px;

@media(max-width:1068px){
width:75px;
height: 75px;
top: 5px;    
}

@media(max-width: 375px){
display: flex;
justify-content:space-between;
border: 1px solid white;
top:0px;
left: 0px;
width: 100%;

   
    
}
`
export const NavigationContainer=styled.div`
width: 100%;
max-width: 350px;
height: 85px;
@media (max-width:375px){
    max-width: 100%;
    height: auto;
    text-align: center;
    background-color:rgba(249, 246, 247, 1);


}
`
export const ClickBar=styled.i`
color: white;
`
export const CommunityConnectContainer=styled.div`
display: flex;
position: relative;
right: 45px;
@media (max-width:375px){
    display: flex;
    justify-content: center;
    width: 100%;
    right: 0;
    height: 100px;
    //background-color:rgba(249, 246, 247, 1);

}

`
export const ItemsNavigation =styled.li`
text-decoration:none;
list-style: none;
width: 100%;
max-width: 150px;
font-size: 22px;
text-align: center;
@media (max-width:375px){
    max-width: 100%;
    text-align: center;
    }
`
export const ItemNavigationContainer=styled.ul`

display: flex;
justify-content:center;
width: 100%;
max-height: 85px;
line-height: 85px;
@media (width:375px){
   max-height: 200px;
    line-height: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

}
`
export const ItemCommunityConnectCotainer=styled.ul`
border: 1px solid gray;
display: flex;
justify-content: center;
width: 100%;
max-width: 150px;
max-height: 85px;
border-radius: 50px;
@media (max-width:375px){
    background-color: black;

}
`
export const ItemCommunityConnect=styled.li`
top:9px;
display: block;
position: relative;
list-style: none;
height: 65px;
width: 65px;
border-radius: 50px;
&:hover{
    background-color: #5865F2;
}
`
export const ItemCommunityConnect1=styled.li`
display: block;
position: relative;
top:9px;
list-style: none;
height: 65px;
width: 65px;
border-radius: 50px;
&:hover{
    background-color:#00acee;
}
`
export const MainLogoImage =styled.img`
display: block;
position: relative;
top: 5px;
width:100%;
@media (max-width:375px){
    width: 55px;
    margin-left: 20px;
    margin-top: 5px;
}
`

export const discord ={
fontSize:"28px",
display:"block",
position:"relative",
left:"15px",
top:"17px"
};
export const twitter={
    fontSize:"28px",
    display:"block",
    position:"relative",
    left:"19px",
    top:"18px"
};
