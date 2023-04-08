import styled from "styled-components";

export const FooterMainWrapper=styled.footer`
border: none;
border-top:2px solid gray;
width: 100%;
`
export const FooterWrapper=styled.div`
margin-top:40px;
margin-bottom:40px;

width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;

@media (max-width:768px) {
   flex-direction: column;
}
@media (max-width:375px) {
   flex-direction: column;
}


`
export const FooterContainer=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: nowrap;
@media (max-width:768px) {
  flex-direction: column;
}

`
export const CopywriteInfo=styled.div`
height: 60px;
font-family: 'Outfit', sans-serif;
font-weight:500;
width: 100%;
text-align: center;
line-height: 60px;
font-size: 20px;
@media (max-width:375px){
  font-size: 15px;
}
`
export const FooterItemContainerOne=styled.div`
display: flex;
flex-direction: row;
justify-content: center;

`
export const FooterItemContainerTwo=styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
@media (max-width:768px){
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width:375px){
  flex-direction:column;
  flex-wrap: wrap;
}
`
export const TableFootContainer=styled.table`
border-collapse:collapse;
display: block;
position: relative;

`
export const TableRow=styled.tr`
font-weight:500;
font-family: 'Outfit', sans-serif;


`
export const TableHead=styled.th`
font-family: 'Outfit', sans-serif;
font-weight:500;
font-size: 25px;
padding:32px;
@media (max-width:375px) {
  font-size: 16px;
  padding:25px;
}
`
export const TableData=styled.td`
font-family: 'Outfit', sans-serif;
text-align: center;
font-size: 22px;
padding: 5px 12px 5px 12px;
@media (max-width:1068px){
  font-size: 20px;
}
@media (max-width:768px){
  font-size: 18px;
}
@media (max-width:375px) {
  font-size: 12px;
}
`
export const TableBlock=styled.div`
height: 70px;
width: 350px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
@media (max-width:375px){
  height:60px;
 
}

`
export const InternalBlock=styled.div`
width: 350px;
text-align: center;
line-height: 70px;
font-size: 20px;
font-family: 'Outfit', sans-serif;
@media (max-width:375px){
  font-size: 15px;
}
`
export const InternalBlock2=styled.div`
font-family: 'Outfit', sans-serif;
width: 350px;
text-align: center;
line-height: 70px;
font-size: 40px;
@media (max-width:768px){
  font-size: 30px;
}
@media (max-width:375px){
  font-size: 30px;
}
`