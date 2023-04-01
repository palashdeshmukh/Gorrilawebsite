import styled from "styled-components";
export const HomepageMain =styled.div`
border: 1px solid white;
`
export const JoinDiscord=styled.div`
max-width: 180px;

z-index: 1;
bottom:0;
position: fixed;
position:sticky;
position: -webkit-sticky;
float: right;
margin-right: 40px;
@media (max-width:1068px){
    max-width: 120px;
    display: none;
}
@media (max-width:768px){
    max-width: 90px;
    display: none;

}
`
export const MydiscrodCircle=styled.button`
height: 150px;
width: 150px;
color:black;
font-size: 18px;
font-weight: bold;
border-radius: 100px;
float: right;
border: none;
display: block;
position: relative;
@media (max-width:1068px){
    max-width: 120px;
    max-height: 120px;
}
@media (max-width:768px){
    max-width:90px;
    max-height:90px;
}
@media (max-width:375px){
    max-width:70px;
    max-height:70px;
    display: none;
}
`
export const JoinDiscordNew=styled.p`
color: black;
font-size: 16px;
margin-top: 10px;
@media (max-width:1068px){
font-size: 14px;
}
@media (max-width:768px){
    display: none;
}
`