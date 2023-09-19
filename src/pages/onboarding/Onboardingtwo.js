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
import secondonboarding from "../../assets/secondonboarding.svg"
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import { Link } from "react-router-dom";










const Onboardingtwo = () => {






    return (
        <OnboardingParent>
            <OnboardingWrapper>
                <BarWrapper>
                    <NavbarConnect/>
                </BarWrapper>
                <CentreWrapper>
                <HeroContainer><img src={secondonboarding} alt="secondonboarding" /></HeroContainer>
                <ButtonContainer>
                  <Link to='/on-boarding' style={{ textDecoration: 'none', color: 'white' }}>     <EButton >Back</EButton></Link>
                
                </ButtonContainer>
                    <TextContainer>
                        <h1>Build with confidence on Dapi</h1>
                        <h2>A platform for secure blockchain services and smart contract 
                            <br></br>development, provides you with a library of audited and 
                            <br></br>reusable smart contracts, a CLI tool for deploying and 
                            <br></br>managing your contracts, and a suite of security services for
                            <br></br> monitoring and protecting your decentralized applications.</h2>
                       
                          <Link to='/onboarding-three' style={{ textDecoration: 'none', color: 'white' }}>  <NButton >Next</NButton></Link>
                            
                       
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


export default Onboardingtwo;