import React from "react";
import {
    ServicesDiv,
    HelpDiv,
    SubcenterWrapper,
    ConnectDiv,
    FooterParent,
    LogoContainer,
    OthersContainer,
    AboutDiv,
    CommunityDiv,
    SocialDiv,
    

} from "./footer.styles";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";


const Footer = () => {
    return (

        <FooterParent>
            <SubcenterWrapper>
                <hr/>

                <OthersContainer>
                    <ConnectDiv>
                        <LogoContainer>
                            <img src={logo} alt="logo" width={50} />

                        </LogoContainer>



                    </ConnectDiv>
                    <ServicesDiv>
                        <h1>Services</h1>
                        <p><br></br>Smart Contract Development
                            <br></br>Blockchain Integration
                            <br></br>Deployment and Hosting
                            <br></br>Testing and Debugging
                            <br></br>E-commerce Registration
                            <br></br>Security and Auditing</p>

                    </ServicesDiv>
                    <AboutDiv>
                        <h1>About us</h1>
                        <p><br></br>About
                            <br></br>Collaboration
                            <br></br>Development
                            <br></br>E-commerce
                            <br></br>Monitoring</p>
                    </AboutDiv>
                    <HelpDiv>
                        <h1>Help and support</h1>
                        <p> <br></br>Help center
                            <br></br>Contact us
                            <br></br>Privacy & Terms
                            <br></br>Support</p>

                    </HelpDiv>
                    <CommunityDiv>
                        <h1>Community</h1>
                        <p>Developers
                            <br></br>Discussion channels
                            <br></br>Events
                            <br></br>Open-source
                            <br></br>Workshop
                            <br></br>Partnership
                        </p>
                    </CommunityDiv>

                </OthersContainer>
                <hr/>
                <SocialDiv>
                <p> @copyright 2023<b style={{marginLeft:'3rem'}}> Help</b > <b style={{marginLeft:'2rem'}}>Privacy</b> <b style={{marginLeft:'2rem'}}>Terms</b>
                <img src={facebook} alt='facebook'  marginLeft='20rem'/>  <img src={twitter} alt='twitter'/>  <img src={instagram} alt='instagram'/> </p>
                </SocialDiv>
            </SubcenterWrapper>
        </FooterParent>
    )



}

export default Footer;