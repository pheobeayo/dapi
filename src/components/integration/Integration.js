import React from "react";
import {
    IntegrationParent,
    IntegrationWrapper,
    Header,
    SummaryContainer,
    SummaryContainer2,
    SummaryCard,
    Button
} from "./integration.styles";
import eth from "../../assets/eth.png";
import solana from "../../assets/solana.png";
import ripple from "../../assets/ripple.png";
import polkadot from "../../assets/polkadot.png";
import caranado from "../../assets/caranado.png";
import binance from "../../assets/binance.png";








const Integration = () => {


    return (
        <IntegrationParent>
            <IntegrationWrapper>
                <Header><h2>Integration</h2>


                </Header>
                <SummaryContainer>
               <p> Dapi integration capabilities are with various blockchain platforms, decentralized storage solutions, and other relevant technologies. The 
                <br></br>compatibility with popular blockchain networks, storage systems, and complementary technologies ensures seamless integration and 
                <br></br>interoperability, allowing developers to leverage the best of decentralized infrastructure, these are some of the blockchain platforms</p>
                </SummaryContainer>
                <SummaryContainer2>
                    <SummaryCard>
                     <Button><img src={eth} alt="eth"/>Ethereum</Button>
                     <Button><img src={solana} alt="solana"/>Solana</Button> 
                     <Button><img src={ripple} alt="ripple"/>Ripple</Button>  
                    </SummaryCard>
                    <SummaryCard>
                        <Button><img src={binance} alt='binance'/>Binance Smart Chain </Button>
                        <Button><img src={polkadot} alt='polkadot'/>Polkadot</Button>
                        <Button><img src={caranado} alt='caranado'/>Carnado</Button>
                    </SummaryCard>
                </SummaryContainer2>
            </IntegrationWrapper>



        </IntegrationParent>




    )





}


export default Integration;