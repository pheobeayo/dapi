import React from "react";
import {
    DevelopersParent,
    DevelopersWrapper,
    Header,
    SummaryContainer
} from "./developers.styles";
import sdk from "../../assets/sdk.png";
import lib from "../../assets/lib.png";
import documentation from "../../assets/documentation.png";
import code from "../../assets/code.png";
import framework from "../../assets/framework.png";
import test from "../../assets/test.png";








const Developers = () => {


    return (
        <DevelopersParent>
            <DevelopersWrapper>
                <Header><h2>Developer Tools</h2>


                </Header>
                <SummaryContainer>
                    <img src={sdk} alt="sdk" />
                    <img src={lib} alt="lib" />
                    <img src={documentation} alt="documentation" />
                    <img src={code} alt="code" />
                    <img src={framework} alt="framework" />
                    <img src={test} alt="test" />
                </SummaryContainer>
            </DevelopersWrapper>



        </DevelopersParent>




    )





}


export default Developers;