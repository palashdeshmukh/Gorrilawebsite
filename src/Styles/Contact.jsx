import styled from "styled-components";

export const ContactMainWrapper=styled.section`
display: flex;
justify-content: center;
width: 100%;

`
export const ContactWrapper=styled.div`
border: 3px solid gray;
border-right:none;
margin-top: -3px;
border-bottom: none;
width: 100%;
max-width: 1300px;
margin-left:-56px;
height: 900px;
border-top-left-radius:50px;
@media (max-width:1068px){
        width: 100%;
        max-width: 722px;

}
@media (max-width:768px) {
    max-width: 444px;
}
@media (max-width:375px) {
width: 65%;
height: 590px;
border-top-left-radius:20px;

}


`
export const ContactItemOne=styled.div`
margin-top: 50px;
margin-bottom: 100px;
@media (max-width:375px) {
    margin-bottom: 45px;
}
`
export const ContactItemTwo=styled.div`
`
export const ContactPara=styled.p`
font-size: 20px;
margin-left: 40px;
margin-top: 20px;
@media (max-width:768px) {
    font-size: 16px;
}
@media(max-width: 375px){
    margin-left:5px;
    display: none;
}
`
export const ContactTitle=styled.h1`
font-size: 85px;
margin-left: 40px;
@media (max-width:1068px) {
    font-size: 75px;
}
@media (max-width:768px) {
    font-size: 60px;
}
@media(max-width: 375px){
    font-size: 35px;

}
`
export const ContactLabelsForm=styled.div`

height: 100px;
line-height: 85px;
@media (max-width:1068px) {
    
}
`
export const ContactLabel=styled.label`
font-size: 32px;
margin-left: 40px;
@media (max-width:1068px) {
    font-size: 27px;
}
@media (max-width:768px) {
  font-size: 18px;
}
`
export const ContactUsInput=styled.input`
display: block;
position: relative;
bottom:65px ;
left: 450px;
width:600px;
height:40px;
background-color: transparent;
border-top: hidden;
border-right:hidden;
border-left: hidden;
border-bottom:visible;
outline: none;
@media (max-width:1068px) {
    width: 400px;
    left: 380px;

}
@media (max-width:768px) {
    width: 200px;
    left: 240px;

}
@media (max-width:375px) {
width: 200px;
    left: 25px;
    top: -27px;
    text-align: center;
}
    
::placeholder{
font-size: 20px;
display: block;
position: relative;
left: 3px;
@media (max-width:1068px) {

}
@media (max-width:768px) {
    font-size: 13px;
}
}
`
export const ContactSubmit=styled.button`
width: 200px;
height: 200px;
border-radius: 100px;
font-weight: bold;
display: block;
position: relative;
float: right;
right: 0;
top: 20px;
font-size: 18px;
background-color:blue;
border: none;
@media (max-width:768px){
    width: 150px;
    height: 150px;
    font-size: 16px;
}
@media (max-width:375px){
    width: 90px;
    height:90px;
    top: 30px;
    right: 65px;
    font-size: 12px;
    line-height: 18px;

}
`