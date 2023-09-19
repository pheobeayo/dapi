import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarParent = styled.div`
    width: 100vw;
    height: 20vh;
    display: flex;
    background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);

     `;

export const NavbarWrapper = styled.div`
     width: 100%;
     height: 90%;
     display: flex;
     position: relative;
     background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);
 
      `;


export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    
    
  

    & img {
    width: 15rem;
    margin-top:3rem;
    }

    
    `;

 
export const BigLinkContainer = styled.div`
    display: flex;
    margin-left: 7rem;
    
`;

export const NavbarLink = styled(Link)`
 color:white;
 font-size: 1rem;
 font-family: sans-serif;
 text-decoration: none;
 color: #fff;
 margin-left:3rem;
 margin-top:5rem;
 

& focus{
    color: white;
}
& active{
    color: #fff;
}

`;


export const ButtonWrapper = styled.div`
display:flex;
margin-left:5rem;



& img{
    margin-right:1rem;
    margin-top:0.5rem;
    width: 1.5rem;
    height:1.5rem;

}




`;

export const Button = styled.button`
display: flex;
background:linear-gradient(150deg, #FFA500 30%, #228B22);
width:8rem;
border: 1px solid #228B22; 
border-radius:5px;
color:#fff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-top: 4rem;



`;

export const SearchBarContainer = styled.div`
  display: flex;
  width:  100%;
  height: 40%;
  
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  border: 1px solid #2B572B;
  border-radius: 15px;
  height: 90%;
  background: #2B572B;

  & .search-input {
    border: 0;
    outline: none;
    background: #2B572B;
    color: #fff;
    font-size: 1rem;
    margin-left:3rem;
    

  }
  & .search-input::placeholder {
    color: #fff;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-top: 2rem;
  }
  
`;
