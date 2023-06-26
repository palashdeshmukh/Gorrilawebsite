import React from "react";
import {FooterMainWrapper,FooterWrapper,TableBlock,TableData,InternalBlock2,TableHead,TableRow,TableFootContainer,FooterContainer,CopywriteInfo,InternalBlock,FooterItemContainerOne,FooterItemContainerTwo} from "../../Components-Styles/Footer";
const Footer=()=>{
    return(
        <>
        <FooterMainWrapper>
        <FooterContainer>
            <FooterWrapper>
<FooterItemContainerOne>
<TableFootContainer>
<thead>
    <TableRow>
        <TableHead>Fingertipe</TableHead>
        <TableHead>Resources</TableHead>
        <TableHead>About</TableHead>
    </TableRow>
</thead>
    <tbody>
    <TableRow>
        <TableData>Home</TableData>
        <TableData>Discord</TableData>
        <TableData>Lorem</TableData>
    </TableRow>
    <TableRow>
        <TableData>Blog</TableData>
        <TableData>Twitter</TableData>
        <TableData>Lorem</TableData>
    </TableRow>
    <TableRow>
        <TableData>Roadmap</TableData>
        <TableData>Lorem</TableData>
        <TableData>Lorem</TableData>
    </TableRow>
    <TableRow>
        <TableData>Contact</TableData>
        <TableData>Lorem</TableData>
        <TableData>Lorem</TableData>
    </TableRow>
    </tbody>
</TableFootContainer>

</FooterItemContainerOne>
<FooterItemContainerTwo>
    <TableBlock>
    <InternalBlock><i style={{fontSize:"30px",color:"blue"}} className="bi bi-discord"/></InternalBlock>
    <InternalBlock style={{color:"blue",fontWeight:"bold"}}>Join us on Discord</InternalBlock>
    </TableBlock>   
    <TableBlock>
    <InternalBlock2><i className="bi bi-tablet"/></InternalBlock2>
    <InternalBlock style={{fontWeight:"bold"}}>(239) 555-0193</InternalBlock>
    </TableBlock>
    <TableBlock>
    <InternalBlock2><i className="bi bi-twitter"/></InternalBlock2>
    <InternalBlock2><i className="bi bi-discord"/></InternalBlock2>
    </TableBlock>
</FooterItemContainerTwo>

            </FooterWrapper>
            </FooterContainer>
            <CopywriteInfo>@copyright.play2022</CopywriteInfo>
        </FooterMainWrapper>

        </>
    );
};
export default Footer;