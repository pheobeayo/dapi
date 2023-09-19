import React from "react";
import {
    NavbarParent,
    NavbarWrapper,
    LogoContainer,
    BigLinkContainer,
    NavbarLink,
    Button,
    ButtonWrapper,
   

} from "./navbar.styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";




const NavbarConnect = () => {

    return (
        <NavbarParent>
            <NavbarWrapper>
                <LogoContainer><Link to="/"><img src={logo} alt="logo" /></Link>
                
                </LogoContainer>
               
                <BigLinkContainer>
              
                    <NavbarLink><Link  style={{ textDecoration: 'none', color: 'white' }} >Solutions</Link></NavbarLink>
                    <NavbarLink> <Link style={{ textDecoration: 'none', color: 'white' }}>Products</Link></NavbarLink>
                    <NavbarLink> <Link  style={{ textDecoration: 'none', color: 'white' }}>Resources</Link></NavbarLink>
                    <NavbarLink><Link style={{ textDecoration: 'none', color: 'white' }}>Company </Link></NavbarLink>
                <NavbarLink><Link  style={{ textDecoration: 'none', color: 'white' }}>Doc</Link></NavbarLink>
                </BigLinkContainer>
                <ButtonWrapper>
                    
              
                    <Button>Connect Wallet</Button>



                </ButtonWrapper>




            </NavbarWrapper>
        </NavbarParent >
    )



}

export default NavbarConnect;