import React from "react";
import {
    AboutParent,
    AboutWrapper,
    
    Header,
    LButton,
    SummaryContainer
} from "./about.styles";

import { Link } from "react-router-dom";







const About = () => {


    return (
        <AboutParent>
            <AboutWrapper>
                <Header><h2>About</h2>
                <h3>What makes us unique</h3>

                </Header>
                <SummaryContainer>
                <p>Dapi aims to replace traditional centralized API systems with a decentralized alternative, empowering developers with an open-source and 
                    <br></br>transparent API infrastructure. By leveraging blockchain technology, Dapi provides increased transparency, data ownership, and resilience to 
                    <br></br>developers and users. It also foster innovation, empowering developers, enhancing data control and ownership, promoting transparency, and 
                    <br></br>enabling the creation of decentralized applications that leverage blockchain technology</p>
                    <Link style={{ textDecoration: 'none', color: 'black' }}> <LButton>Learn More</LButton></Link>
                </SummaryContainer>
               
            </AboutWrapper>



        </AboutParent>




    )





}


export default About;