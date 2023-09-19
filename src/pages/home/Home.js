import React from "react";
import {
    BarWrapper,
    ButtonContainer,
    CentreWrapper,
    GetContainer,
    EButton,
    FooterWrapper,
    HeroContainer,
    HomeParent,
    HomeWrapper,
    LButton,
    TechnicalContainer,
    JoinContainer,
    IntegrationContainer,
    TextContainer,
    AboutWrapper,
    DevelopersContainer,
    } from "./home.styles";
import Navbar from "../../components/navbar/Navbar";
import landingimage from "../../assets/landingimage.png";
import Developers from "../../components/developers/Developers";
import Integration from "../../components/integration/Integration";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";
import Technical from "../../components/technical/Technical";
import Join from "../../components/join/Join";
import Get from "../../components/get/Get";
import {Link} from "react-router-dom"









const Home = () => {






    return (
        <HomeParent>
            <HomeWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <CentreWrapper>
                    <TextContainer>
                        <h1>Your Developer 
                            <br></br>Toolbox Just 
                            <br></br>Got Better!</h1>
                        <h2>Introducing our decentralized API which will empower Developers
                            <br></br> with a Transparent and Open-Source API Infrastructure</h2>
                        <ButtonContainer>
                           <Link to='/on-boarding' style={{ textDecoration: 'none', color: 'white' }}> <LButton>Get Started Now</LButton></Link>
                            <EButton>Create Blockchain</EButton>
                        </ButtonContainer>
                    </TextContainer>
                    <HeroContainer><img src={landingimage} alt="landingimage" /></HeroContainer>
                </CentreWrapper>
                <AboutWrapper>
                    <About />
                </AboutWrapper>
                <TechnicalContainer>
                    <Technical/>
                </TechnicalContainer>
                <DevelopersContainer>
                    <Developers/>
                </DevelopersContainer>
                <IntegrationContainer>
                    <Integration/>
                </IntegrationContainer>
                <JoinContainer>
                    <Join/>
                </JoinContainer>
                <GetContainer>
                    <Get/>
                </GetContainer>
                <FooterWrapper>
                    <Footer/>
                </FooterWrapper>
            </HomeWrapper>



        </HomeParent>




    )



}


export default Home;