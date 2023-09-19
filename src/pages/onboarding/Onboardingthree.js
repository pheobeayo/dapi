import React from "react";
import {
    BarWrapper,
    ButtonContainer,
    CentreWrapper,
    EButton,
    HeroContainer,
    OnboardingParent,
    OnboardingWrapper,
    TextContainer,
    NButton,
    SocialDiv
    } from "./onboarding.styles";
import NavbarConnect from "../../components/navbar/NavbarConnect";
import thirdonboarding from "../../assets/thirdonboarding.svg"
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import { Link } from "react-router-dom";










const Onboardingthree = () => {






    return (
        <OnboardingParent>
            <OnboardingWrapper>
                <BarWrapper>
                    <NavbarConnect/>
                </BarWrapper>
                <CentreWrapper>
                <HeroContainer><img src={thirdonboarding} alt="thirdonboarding" /></HeroContainer>
                <ButtonContainer>
                <Link to='/onboarding-two' style={{ textDecoration: 'none', color: 'white' }}>      <EButton>Back</EButton></Link> 
                
                </ButtonContainer>
                    <TextContainer>
                        <h1>Unleash great features on Dapi</h1>
                        <h2>The web-based IDE for blockchain technology,it lets you write, 
                            <br></br>compile, debug, and deploy smart contracts and integrates 
                            <br></br>blockchain services with ease. Start coding your decentralized 
                            <br></br>applications today!</h2>
                       
                            <NButton>Next</NButton>
                            
                       
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


export default Onboardingthree;