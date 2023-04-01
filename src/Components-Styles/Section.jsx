import styled from "styled-components";
import { ReactDOM } from "react";

export const SectionMain=styled.section`
display: block;
margin-top: 105px;
`

export const SectionMainContainer=styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap:nowrap;
width: 100%;

`
export const SectionWrapper=styled.div`
display: flex;
justify-content: space-between;
flex-wrap: nowrap;
flex-direction: row;
width: 100%;
max-width: 1600px;

@media(max-width: 1068px){
    flex-direction: column;
    max-width: 900px;
}
@media(max-width: 768px){
    max-width: 650px;
}
@media(max-width: 375px){
    width: 100%;
}
`
export const SectionItemContainer=styled.div`
width: 100%;
max-width:620px;
justify-content: center;
display: flex;
flex-direction: column;
@media(max-width: 1068px){
    width:100%;
    max-width: 100%;
}
@media(max-width:375px){
}
`

export const DivtextContainer1=styled.div`
  background-color: rgba(250,246,248, 0.1); 
position:absolute ;
padding: 0px 5px 0px 5px;
margin-top:-510px;
margin-left:120px;
border-radius: 50px;
width: 250px;
height: 90px;
@media(max-width: 1068px){
}
@media (max-width:768px){
    display: none;


}
@media (max-width:375px){
display: none;
}
`
export const DivtextContainer2=styled.div`
   background-color: rgba(250,246,248, 0.1); 
top:-600px;
display: block;
position: relative;
width: 250px;
float: right;
right:80px;
color: white;
border-radius: 50px;
height: 90px;
@media(max-width:1068px){
   
}

@media (max-width:768px){
    display: none;


}


`
export const DivtextContainer3=styled.div`
background-color: rgba(250,246,248, 0.1); 
position:relative ;
padding: 0.1px 5px 0px 5px;

width: 250px;
left: 150px;
display: block;
top: -280px;

border-radius: 50px;
height: 90px;
@media(max-width: 1068px){
}
@media (max-width:768px){
    display: none;

}
`
export const DivtextContainer4=styled.div`
background-color: rgba(250,246,248, 0.1);  
display: block;
position:relative ;
top:-420px;
float: right;
right: 130px;
padding: 0px 5px 0px 5px;
width:200px;
border-radius: 50px;
height: 90px;

@media(max-width: 1068px){
}
@media (max-width:768px){
    margin-left: 0px;
    display: none;
}
`
export const SectionItemContainer2=styled.div`
width: 100%;
max-width: 980px;
max-height: 750px;
@media(max-width:1068px){

    width:100%;
}
@media(max-width:768px){
}
@media(max-width: 375px){
}
`
export const DivtextContainer=styled.div`
height: 80px;
border-radius: 50px;
position: absolute;
width: 270px;
display: block;
background-color:transparent;
@media(max-width: 1068px){
}


`
export const TitleHead=styled.h1`
font-size: 78px;
display: block;
position: relative;
font-family: sans-serif;
@media (max-width:1068px){
    margin-top: 50px;
    text-align: center;
}
@media(max-width: 375px){
    font-size: 35px;
}

`
export const ParaHead=styled.p`
height: 100px;
width: 100%;
display: block;
max-width: 550px;
position: relative;
font-size: 21px;
margin-top:35px;
font-family: sans-serif;
@media (max-width:1068px){
    margin-top: 50px;
    margin-left: 180px;
    text-align: center;
    font-size: 18px;
    word-spacing: 1px;

}
@media (max-width:768px){
    margin-left: 50px;
}
@media(max-width: 375px){
    margin-top: 10px;
    font-size:15px;
    height: auto;
    display: none;
}

`
export const SearchContainer=styled.div`
border: 1px solid gray;
border-radius:50px;
width: 100%;
max-width: 550px;
display:flex;
justify-content:space-evenly;
@media (max-width:1068px){
    margin-left: 180px;
    
}
@media (max-width:768px){
   margin-left:50px;
}
@media(max-width: 375px){
    display: none;
}
`
export const InputFirst=styled.input`
    height:35px;
    background-color:transparent;
    border:none;
    font-size:18px;
    margin-top:16px;
    outline: none;
::placeholder{
    outline: none;
}
`
export const SelectBox=styled.select`
   height:55px;
   text-align:center;
   font-size:18px;
   background-color:transparent;
   color:white;
   border:none;
   outline: none;
   border-left:1px solid gray;

`

export const SearchItem=styled.div`
height: 70px;
line-height: 65px;

`

export const SearchBarInnerContainer1={
    display:"flex",
    justifyContent:"center",
    marginTop:"20px"
}
export const MoneyDiv=styled.div`
position: absolute;
width: 280px;
height: 280px;
display: block;
margin-left: 400px;
bottom: 100px;
@media(max-width:1068px){
    bottom: -220px;
    margin-left: 350px;
}
@media(max-width:768px){
    bottom: -30px;
    margin-left: 260px;
    width: 200px;
height: 200px;
}
@media(max-width:375px){
    display: none;
}
`
export const Moneylog=styled.img`
  width: 280px;
  height: 280px;
  @media(max-width:768px){
    width: 200px;
height: 200px;
}
    `

export const GorilaMov=styled.img`
display:block;
position:relative;
width: 100%;
height: 100%;


@media (max-width:1068px){
    
}
@media (max-width:768px){

}
@media(max-width: 375px){
}
`
export const ArrowImg=styled.img`
display: block;
position: relative;
width: 30px;
height: 30px;
left: 20px;
top: 15px;
;
`


export const Circles=styled.div`
width: 60px;
height:60px;
display: block;
position: relative;
left: 36px;
top: 5px;
border-radius:50px;
background-color:blue;

`
export const SectionParaTwo=styled.p`
font-size: 16px;
margin-top: 12px;
font-weight: bold;
display: block;
text-align: center;
line-height: 35px;

`
