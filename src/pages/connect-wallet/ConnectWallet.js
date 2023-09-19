import React from "react";
import {
    BarWrapper,
    CentreWrapper,
    ConnectWalletParent,
    ConnectWalletWrapper,
    Header,
    SocialDiv,
    SummaryContainer,
    SummaryContainer2
} from "./connect.wallet.styles";
import NavbarConnect from "../../components/navbar/NavbarConnect";
import metamaskbutton from "../../assets/metamaskbutton.svg";
import trustbutton from "../../assets/trustbutton.svg";
import coinbasebutton from "../../assets/coinbasebutton.svg";
import dapibutton from "../../assets/dapibutton.svg";
import walletconnectbutton from "../../assets/walletconnectbutton.svg";
import otherwalletbutton from "../../assets/otherwalletbutton.svg";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";











const ConnectWallet = () => {






    return (
        <ConnectWalletParent>
            <ConnectWalletWrapper>
                <BarWrapper>
                    <NavbarConnect />
                </BarWrapper>
                <CentreWrapper>
                    <Header><h2>Choose your preferred Wallet</h2></Header>
                    <SummaryContainer>
                        <img src={metamaskbutton} alt="metamaskbutton" />
                        <img src={trustbutton} alt="trustbutton" />
                        <img src={coinbasebutton} alt="coinbasebutton" />

                    </SummaryContainer>
                    <SummaryContainer2>
                    <img src={dapibutton} alt="dapibutton"/>
                    <img src={walletconnectbutton} alt="walletconnectbutton"/>
                    <img src={otherwalletbutton} alt="otherwalletbutton"/>
                    </SummaryContainer2>

                    <hr />
                    <SocialDiv>

                        <p> @copyright 2023<b style={{ marginLeft: '3rem' }}> Help</b > <b style={{ marginLeft: '2rem' }}>Privacy</b> <b style={{ marginLeft: '2rem' }}>Terms</b>
                            <img src={facebook} alt='facebook' marginLeft='20rem' />  <img src={twitter} alt='twitter' />  <img src={instagram} alt='instagram' /> </p>
                    </SocialDiv>
                </CentreWrapper>

            </ConnectWalletWrapper>



        </ConnectWalletParent>




    )



}


export default ConnectWallet;