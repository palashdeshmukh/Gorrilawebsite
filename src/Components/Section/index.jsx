import React from "react";
import Images from "../../Images/index";
import styled from "styled-components";
import {SectionWrapper,SectionMainContainer,SectionMain,MoneyDiv,SelectBox,InputFirst,ArrowImg,DivtextContainer1,DivtextContainer2,DivtextContainer3,DivtextContainer4,Circles,SectionItemContainer2,Circle,OptionInput,DivtextContainer,SectionParaTwo,SearchInput,SearchItem,SectionItemContainer,Moneylog,GorilaMov,TitleHead,ParaHead,SearchContainer,SearchBarInnerContainer1,SearchBarInnerContainer2, SearchBar} from "../../Components-Styles/Section";
const Slider=()=>{
    return(
        <>
        <SectionMain>
        <SectionMainContainer>
        <SectionWrapper>
<SectionItemContainer>
    <TitleHead>Guild Hub of the Metaverse</TitleHead>
    <ParaHead>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis mattis hendrerit. Praesent vel risus in risus vestibulum aliquet.</ParaHead>
    <SearchContainer>
    <SearchItem>
    <InputFirst type="text" placeholder="Enter your Email Address"/>
     </SearchItem>
    <SearchItem>
        <SelectBox>
            <option>Owner</option>
            <option>Palash</option>
            <option>Abhinay</option>    
        </SelectBox>
    </SearchItem>
    <Circles><ArrowImg src={Images.vectorarrow} alt=""/></Circles>
 
    </SearchContainer>
</SectionItemContainer>
<SectionItemContainer2><GorilaMov  src={Images.gorillaLogo} alt="" />
<DivtextContainer1><SectionParaTwo>Automate payments for quick transparent cashout?</SectionParaTwo></DivtextContainer1>
<DivtextContainer2><SectionParaTwo>You mean,i can track my scholars'performance</SectionParaTwo></DivtextContainer2>
<DivtextContainer3><SectionParaTwo>All on one platform that doesn't lag?You're Kidding</SectionParaTwo></DivtextContainer3>
<DivtextContainer4><SectionParaTwo>Search and Breed Axies and NFTs</SectionParaTwo></DivtextContainer4>

<MoneyDiv><Moneylog src={Images.moneylogo} alt=""/></MoneyDiv>

</SectionItemContainer2>

        </SectionWrapper>
        </SectionMainContainer>
        </SectionMain>

        </>
    );
};
export default Slider;