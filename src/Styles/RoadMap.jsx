import styled from "styled-components";

export const RoadMapMainWrapper=styled.section`
display: flex;
justify-content: center;
width: 100%;

`
export const RoadMapWrapper=styled.div`
width: 100%;
max-width:1358px;

@media (max-width:1068px){
        width: 100%;
        max-width: 780px;

}
@media (max-width:768px) {
    max-width: 500px;
}
@media (max-width:375px){
    max-width: 250px;
}

`
export const RoadMapItemBoxZero=styled.div`

@media (max-width:375px){

}
`
export const RoadMapLogoboxes=styled.div`
display: block;
max-width: 295px;
max-height: 295px;
width: 100%;
position:absolute ;
margin-top: -500px;
right: 350px;
@media (max-width:1068px){
    right: 180px;
    margin-top: -340px;
    max-width: 200px;
}
@media (max-width:768px){
right: 120px;
margin-top:-320px;
max-width: 150px;
}
@media(max-width:375px){
    max-width:100px;
    max-height: 100px;
    margin-top: -150px;
    right: 40px;
}
`
export const Innerlogo=styled.img`
display: block;
position: absolute;
top:45px;
left:50px;
width: 100%;
max-width:200px ;
max-height:200px;
width: fit-content;
@media (max-width:1068px){
max-width: 130px;
max-height: 130px;
top:35px;
left: 35px;

}
@media (max-width:768px){
    max-width: 90px;
    max-height: 90px;
    margin-top: -5px;
    margin-left: -5px;
}
@media(max-width:375px){
    width: 70px;
    height: 70px;
    margin-top: -20px;
    margin-left: -20px;
}

`
export const EllicpsImage=styled.img`
display: block;
width: 100%;
height:100%;
width: fit-content;
@media (max-width:1068px){
    width: 200px;
    height: 200px;
}
@media (max-width:768px){
    width: 150px;
    height: 150px; 
}
@media(max-width:375px){
    width: 100px;
    height: 100px;
}

`
export const RoadMapItemBoxOne=styled.div`
border: 3px solid gray;
border-right:none;
max-width: 1300px;
border-top:none;
max-height:750px;
border-bottom-left-radius:50px;
width: 100%;
@media(max-width: 1068px){
  max-width: 722px;

}
@media(max-width: 768px){
  max-width: 444px;

}
@media(max-width: 375px){
    border-bottom-left-radius:20px;
    max-width: 191px;


}

`
export const RoadMapItemBoxTwo=styled.div`

border: 3px solid gray;
height: 350px;
max-width: 1300px;
margin-left: 56px;
border-bottom-right-radius: 50px;
border-top-right-radius: 50px;
border-left: none;
width: 100%;
margin-top: -3px;
@media(max-width: 1068px){
  max-width: 722px;

}
@media(max-width: 768px){
  max-width: 444px;
  max-height: 255px;

}

@media(max-width: 375px){
    height: 140px;
    max-width: 191px;

    border-bottom-right-radius: 20px;
border-top-right-radius: 20px;
}


`
export const RoadMapItemBoxThree=styled.div`
border-bottom-left-radius:50px;
border-top-left-radius:50px;
margin-top: -3px;

max-width: 1300px;
border: 3px solid gray;
height: 350px;
width: 100%;
border-right:none;
@media(max-width: 1068px){
  max-width: 722px;

}
@media(max-width: 768px){
  max-width: 444px;
  height: 255px;

}
@media(max-width: 375px){
    height: 140px;
    max-width: 191px;

    border-bottom-left-radius:20px;
border-top-left-radius:20px;
}

`
export const RoadMapItemInnerBoxOne=styled.div`
height:250px;
width: 300px;
display: block;
position: relative;
left: -150px;
top: 160px;
border-radius: 50px;
background-color: white;
display: flex;
justify-content: center;
flex-wrap: nowrap;
flex-direction: row;
@media(max-width: 1068px){
    height: 180px;
    width: 250px;
    left: -130px;
    top: 100px;
}
@media(max-width: 768px){
    height: 180px;
    width: 230px;
    left: -115px;
    top: 100px;
}
@media(max-width: 375px){
    width: 120px;
    height: 100px;
    left:-60px;
    top: -30px;
    border-radius: 30px;

}
`
export const RoadMapItemInnerBoxTwo=styled.div`
height:200px;
width: 300px;
display: block;
float: right;
top: 80px;
left: 150px;
position: relative;
border-radius: 50px;
background-color:#15232A;
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: nowrap;
@media(max-width: 1068px){
   height :130px ;
   width: 200px;
   border-radius: 25px;
   left: 100px;
   top: 100px;
}
@media (max-width:768px) {
   top:60px;
}
@media(max-width: 375px){
    width: 100px;
    height: 80px;
    left:50px;
    top: 30px;
    border-radius:15px;

}
`
export const RoadMapItemInnerBoxThree=styled.div`
height:200px;
width: 300px;
display: block;
top: 80px;
left: -150px;
position: relative;
border-radius: 50px;
background-color: #15232A;
@media(max-width: 1068px){
    height :130px ;
   width: 200px;
   border-radius: 25px;
   left: -100px;
   top: 100px;
}
@media (max-width:768px){
    top: 60px;
}
@media(max-width: 375px){
    border-radius:15px;

    width: 100px;
    height: 80px;
    left: -50px;
    top:30px;
    border-radius: 15px;
}

`
export const RoadMapItemTitleBox=styled.div`
display: block;
position: relative;
top: 80px;

@media(max-width: 375px){
    height:130px;
}

`
export const RoadMapTitle=styled.h1`
font-size: 90px;
margin-left: 40px;

@media (max-width:768px) {
    font-size: 75px;
}
@media(max-width: 375px){
    margin-left: 20px;
   font-size: 35px;
   
}

`
export const RoadMapParaOne=styled.p`
margin-top: 20px;
margin-left: 40px;
font-size:20px;
font-weight: bold;
@media (max-width:768px) {
    font-size:15px;
}
@media(max-width: 375px){
    font-size: 15px;
    margin-left: 5px;
    display: none;
}
`
export const RoadMapItemTitleBoxTwo=styled.div`
max-height: 250px;
max-width: 380px;
width: 100%;
display: block;
position:relative;
top: -100px;
left: 200px;
@media (max-width:1068px) {
   max-height: 200px;
    top: -70px;
    left: 140px;
}
@media (max-width:768px) {
    max-height: 170px;
    top: -70px;
    left: 150px;
    max-width: 240px;
}
@media(max-width: 375px){
    display: none;
}
`
export const RoadMapParaTwo=styled.p`
font-size: 22px;
line-height: 28px;
@media (max-width:1068px){
    font-size:18px;
}
@media (max-width:768px) {
    font-size: 12px;
}
@media (max-width:375px) {
    display: none;
}

`
export const RoadMapTitleNumber=styled.h1`
font-size: 85px;
font-family: sans-serif;
@media (max-width:1068px){
    font-size: 45px;
}
@media (max-width:768px) {
   
    font-size:38px;
}
@media(max-width: 375px){
    font-size: 25px;
}
`
export const RoadMapQ1=styled.h1`
font-size: 55px;
color:blue;
display: block;
position: relative;
top: -5px;
@media (max-width:1068px){
    font-size: 40px;
}
`

export const RoadMapItemTitleBoxFour=styled.div`
max-height: 250px;
top: -150px;
width: 100%;
max-width: 470px;
left: 200px;
position:relative;
@media (max-width:1068px){
    max-height: 190px;
    top: -50px;
    left: 120px;
    max-width: 400px;
}
@media (max-width:768px) {
    max-height: 170px;
    max-width: 230px;
    top: -80px;
}
@media(max-width: 375px){
    display: none;
}
`
export const RoadMapItemTitleBoxThree=styled.div`
max-height: 250px;
width: 100%;
max-width: 470px;
top:50px;
left: 100px;
float: right;
position:relative;
text-align: right;
@media (max-width:1068px){
   max-height: 190px;
    left: 80px;
    top: 80px;
   max-width: 400px;
}
@media (max-width:768px) {
    top:40px;
   max-height: 170px;
    max-width: 240px;
}
@media(max-width: 375px){
    display: none;
}

`
export const RoadMapCircleOne=styled.div`
height: 150px;
width: 150px;
display: block;
position: relative;
top: 50px;
border: 6px solid #64D1DE;
background-color:#1098E1;
border-radius: 100px;
@media (max-width:1068px){
   top: 15px;
   
}
@media (max-width:375px){
    height: 70px;
    border: 4px solid #64D1DE;
    width: 70px;
    top:15px;
}

`
export const RoadMapCircleTwo=styled.div`
height: 150px;
width: 150px;
display: block;
position: relative;
top: 25px;
border: 6px solid lightgray;
background-color: #586367;
border-radius: 100px;
@media (max-width:1068px){
    height: 90px;
    width: 90px;
    top: 20px;
}
@media (max-width:375px){
    border: 4px solid lightgray;
    height: 50px;
    width: 50px;
    top:15px;

}

`
export const RoadMapCircleThree=styled.div`
height: 150px;
width: 150px;
display: block;
position: relative;
left:75px;
top: 25px;
border: 6px solid lightgray;
background-color:#586367;
border-radius: 100px;
@media (max-width:1068px){
    height: 90px;
    width: 90px;
    left: 50px;
    top: 20px;
}

@media (max-width:375px){
    border: 4px solid lightgray;

    height: 50px;
    width: 50px;
    left: 25px;
    top: 15px;

}

`