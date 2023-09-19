import React from "react";
import {
    TechnicalParent,
    TechnicalWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2
    
} from "./technical.styles";
import smart from "../../assets/smart.png";
import block from "../../assets/block.png";
import dapi from "../../assets/dapi.png";
import  decentralized from "../../assets/decentralized.png";
import encryption from "../../assets/encryption.png";
import payment from "../../assets/payment.png";







const Technical = () => {


    return (
        <TechnicalParent>
            <TechnicalWrapper>
                <Header><h2>Technical Architecture</h2>
                   
                    <h3>Connect with the tools you love</h3>
                    <h4>Our software seamlessly integrates with your favorite platforms and apps, so you can work smarter and faster.</h4>
                </Header>

                <SummaryContainer1>
                   <img src={smart} alt="smart" />
                    <img src={block} alt="block"/>
                    <img src={dapi} alt="dapi" />
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={decentralized} alt="decentralized" />
                    <img src={encryption} alt="encryption" />
                    <img src={payment} alt="payment" />
                </SummaryContainer2>
                
            </TechnicalWrapper>



        </TechnicalParent>




    )





}


export default Technical;