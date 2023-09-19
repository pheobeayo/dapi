import React from "react";
import {
    GetParent,
    GetWrapper,
    Header,
    SummaryContainer,
    Button
} from "./get.styles";
import dapilogo from "../../assets/dapilogo.png";








const Get = () => {


    return (
        <GetParent>
            <GetWrapper>
                <Header>
                    <img src={dapilogo} alt="dapilogo" />

                </Header>
                <SummaryContainer>
                    <h1>Get Started with Dapi Now!</h1>
                    <p>Get instant access to start building with our decentralized blockchain application with ease </p>
                    <Button>Register</Button>
                </SummaryContainer>

            </GetWrapper>



        </GetParent>




    )





}


export default Get;