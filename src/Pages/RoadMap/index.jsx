import React from "react";
import Images from "../../Images/index";

import { RoadMapMainWrapper,RoadMapItemTitleBoxTwo,RoadMapLogoboxes,EllicpsImage,Innerlogo,RoadMapItemBoxZero,RoadMapCircleOne,RoadMapWrapper,RoadMapCircleThree,RoadMapItemTitleBoxThree,RoadMapCircleTwo,RoadMapItemTitleBoxFour,RoadMapTitle,RoadMapTitleNumber,RoadMapQ1,RoadMapParaTwo,RoadMapItemTitleBox,RoadMapParaOne,RoadMapItemBoxOne,RoadMapItemBoxTwo,RoadMapItemBoxThree,RoadMapItemInnerBoxOne,RoadMapItemInnerBoxTwo,RoadMapItemInnerBoxThree} from "../../Styles/RoadMap";
const RoadMapPage=()=>{
    return(
        <>
        <RoadMapMainWrapper>
        <RoadMapItemBoxZero></RoadMapItemBoxZero>

            <RoadMapWrapper>
                <RoadMapItemBoxOne>
                <RoadMapItemTitleBox>
                
                    <RoadMapTitle>Road Map</RoadMapTitle>
                    <RoadMapParaOne>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</RoadMapParaOne>
                </RoadMapItemTitleBox>
                    <RoadMapItemInnerBoxOne><RoadMapCircleOne></RoadMapCircleOne></RoadMapItemInnerBoxOne>
                    <RoadMapItemTitleBoxTwo>
                        <RoadMapTitleNumber>2022</RoadMapTitleNumber>
                        <RoadMapQ1>Q1</RoadMapQ1>
                        <RoadMapParaTwo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</RoadMapParaTwo>
                    </RoadMapItemTitleBoxTwo>
                    <RoadMapLogoboxes>
                    <EllicpsImage src={Images.eclips} alt=""/><Innerlogo src={Images.innerlogo} alt=""/>
                    </RoadMapLogoboxes>
                </RoadMapItemBoxOne>

                <RoadMapItemBoxTwo>
                <RoadMapItemInnerBoxTwo><RoadMapCircleTwo></RoadMapCircleTwo></RoadMapItemInnerBoxTwo>
                <RoadMapItemTitleBoxThree>
                        <RoadMapTitleNumber>2022</RoadMapTitleNumber>
                        <RoadMapQ1>Q2</RoadMapQ1>
                        <RoadMapParaTwo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</RoadMapParaTwo>
                    </RoadMapItemTitleBoxThree>
                </RoadMapItemBoxTwo>

                <RoadMapItemBoxThree>
                <RoadMapItemInnerBoxThree><RoadMapCircleThree></RoadMapCircleThree></RoadMapItemInnerBoxThree>
                <RoadMapItemTitleBoxFour>
                        <RoadMapTitleNumber>2022</RoadMapTitleNumber>
                        <RoadMapQ1>Q3</RoadMapQ1>
                        <RoadMapParaTwo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</RoadMapParaTwo>
                    </RoadMapItemTitleBoxFour>
                </RoadMapItemBoxThree>

                <RoadMapItemBoxTwo>
                <RoadMapItemInnerBoxTwo><RoadMapCircleTwo></RoadMapCircleTwo></RoadMapItemInnerBoxTwo>
                <RoadMapItemTitleBoxThree>
                        <RoadMapTitleNumber>2022</RoadMapTitleNumber>
                        <RoadMapQ1>Q4</RoadMapQ1>
                        <RoadMapParaTwo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</RoadMapParaTwo>
                    </RoadMapItemTitleBoxThree>
                </RoadMapItemBoxTwo>

                <RoadMapItemBoxThree>
                <RoadMapItemInnerBoxThree><RoadMapCircleThree></RoadMapCircleThree></RoadMapItemInnerBoxThree>
                <RoadMapItemTitleBoxFour>
                        <RoadMapTitleNumber>2022</RoadMapTitleNumber>
                        <RoadMapQ1>Q5</RoadMapQ1>
                        <RoadMapParaTwo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</RoadMapParaTwo>
                    </RoadMapItemTitleBoxFour>
                </RoadMapItemBoxThree>
                <RoadMapItemBoxTwo>
                <RoadMapItemInnerBoxTwo><RoadMapCircleTwo></RoadMapCircleTwo></RoadMapItemInnerBoxTwo>
                <RoadMapItemTitleBoxThree>
                        <RoadMapTitleNumber>2022</RoadMapTitleNumber>
                        <RoadMapQ1>Q6</RoadMapQ1>
                        <RoadMapParaTwo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</RoadMapParaTwo>
                    </RoadMapItemTitleBoxThree>
                </RoadMapItemBoxTwo>
            </RoadMapWrapper>

        </RoadMapMainWrapper>

        </>
    );
};
export default RoadMapPage;