import React from "react";
import {
    BarWrapper,
    ButtonContainer,
    CentreWrapper,
    EButton,
    HeroContainer,
    OnboardingParent,
    OnboardingWrapper,
    LButton,
    TextContainer,
    NButton,
    SocialDiv
    } from "./onboarding.styles";
import NavbarConnect from "../../components/navbar/NavbarConnect";
import onboarding from "../../assets/onboarding.svg"
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import { Link } from "react-router-dom";










const Onboarding = () => {






    return (
        <OnboardingParent>
            <OnboardingWrapper>
                <BarWrapper>
                    <NavbarConnect/>
                </BarWrapper>
                <CentreWrapper>
                <HeroContainer><img src={onboarding} alt="onboarding" /></HeroContainer>
                <ButtonContainer>
                  <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>     <EButton>Back</EButton></Link>
                <LButton>Skip to Sign up page</LButton>
                </ButtonContainer>
                    <TextContainer>
                        <h1>Welcome to Dapi !</h1>
                        <h2>You get to create, test, deploy smart contracts for your dApp, 
                            <br></br>integrate blockchain services, build smart contract and 
                            <br></br>integrate APIs through drag and drop. Whether you are a 
                            <br></br>beginner or an expert, Dapi has everything you need to build 
                            <br></br>your dApp from scratch and with ease.</h2>
                       
                        <Link to='/onboarding-two' style={{ textDecoration: 'none', color: 'white' }}>    <NButton>Next</NButton></Link>
                            
                       
                    </TextContainer>
                    <hr/>
                    <SocialDiv>
               
                <p> @copyright 2023<b style={{marginLeft:'3rem'}}> Help</b > <b style={{marginLeft:'2rem'}}>Privacy</b> <b style={{marginLeft:'2rem'}}>Terms</b>
                <img src={facebook} alt='facebook'  marginLeft='20rem'/>  <img src={twitter} alt='twitter'/>  <img src={instagram} alt='instagram'/> </p>
                </SocialDiv>
                </CentreWrapper>
                
            </OnboardingWrapper>



        </OnboardingParent>




    )



}


export default Onboarding;