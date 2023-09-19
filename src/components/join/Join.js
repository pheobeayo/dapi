import React from "react";
import {
    JoinParent,
    JoinWrapper,
    Header,
    SummaryContainer,
    Button,
    SummaryContainer2,
    SummaryCard,
} from "./join.styles";
import FormTextInput from "../custom-input/FormTextInput";
import round from "../../assets/round.png";










const Join = () => {


    return (
        <JoinParent>
            <JoinWrapper>
                
                    <Header><h2>Join the waitlist for DAPI Token</h2>
                        <h3>The next generation of APIs is here.</h3>
                        <h4>Are you ready? Get early access to the ultimate Token on DAPI platform for building and monetizing decentralized APIs</h4>


                    </Header>
                    
                    <SummaryContainer>
                    <form>
                        <FormTextInput
                            placeholder="Name"
                            name="name"

                        />

                        <FormTextInput
                            placeholder="Email Address"
                            name="emailAddress"

                        />

                        <FormTextInput
                            placeholder="Phone Number"
                            name="phoneNumber"

                        />
                        <Button>Join the Waitlist Now</Button>
                        </form>
                    </SummaryContainer>
                    <Header><h2>More to get on Dapi</h2></Header>
                    <SummaryContainer2>
                       
                        <SummaryCard>
                        <p><img src={round} alt='round'/>Get access to all smart contracts</p>
                        <p><img src={round} alt='round'/>Integrate all blockchain technology with little cost</p>
                        <p><img src={round} alt='round'/>Build a decentralized application from scratch</p>
                        </SummaryCard>
                        <SummaryCard>
                            <p><img src={round} alt='round'/>Get to switch between web 3 and web 2 integration with ease</p>
                            <p><img src={round} alt='round'/>Receive payment with your e-commerce website at a low fee</p>
                            <p><img src={round} alt='round'/>Build smart contract and integrate APIs</p>
                        </SummaryCard>
                    </SummaryContainer2>

                





            </JoinWrapper>



        </JoinParent>




    )





}


export default Join;