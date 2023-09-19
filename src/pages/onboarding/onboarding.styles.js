import styled from "styled-components";
import { device } from "../../utils/device";


export const OnboardingParent = styled.div`
    width: 100vw;
    height: 150vh;
    display: flex;
    flex-direction: column;
    background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);
`;

export const OnboardingWrapper = styled.div`
     width: 100vw;
     height: 150vh;
     display: flex;
     flex-direction: column;
     background:linear-gradient(135degree, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);

 @media ${device.laptopL} { 
    max-width: 1400px;
    }

 @media ${device.desktop} {
    max-width: 2500px;
    }

 @media ${device.mobileL} {
      max-width: 425px;
      }

  @media ${device.mobileM} {
          max-width: 375px;
          }

  @media ${device.mobileS} {
              max-width: 320px;
              }  
    
`;



export const BarWrapper = styled.div`
      width: 100vw;
      height: 10vh;
      display: flex;
      flex-direction: column;
      margin-top:2rem;
      margin-left:5rem;
      margin-bottom:3rem;
      `;

export const CentreWrapper = styled.div`
     width: 100vw;
     height: 150vh;
    background:linear-gradient(135degree, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);
 

    & hr{
      width:90%;
      margin-top:5rem;
    }
   
      `;



export const TextContainer = styled.div`
width: 50vw;
position: absolute;
top: 65%;
left: 60%;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;

 & h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: 600;
    line-height:4rem;
    color:#FFA500;
   
 }

 & h2 {
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    line-height:2rem;
    margin-left: 7rem;
    margin-top:5rem;
   
 }



`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top:32rem;
    margin-left:3rem;

   
    
    
`;

export const HeroContainer = styled.div`
width: 50vw;
position: absolute;
top: 75%;
left: 30%;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;



`;


export const LButton = styled.button`
display: flex;
background:linear-gradient(150deg, #FFA500 30%, #228B22);
width:10rem;
border: 1px solid #228B22; 
border-radius:5px;
color:#fff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left: 20rem;


`;

export const EButton = styled.button`
display: flex;
width:7rem;
background:transparent;
border: 1px solid  #FFA500; 
border-radius:5px;
color:#FFA500;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:2rem;


`;

export const NButton = styled.button`
display: flex;
width:7rem;
background:linear-gradient(150deg, #FFA500 30%, #228B22);
border: 1px solid  #FFA500; 
border-radius:5px;
color:#fff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:35rem;
margin-top: 5rem;


`;





export const SocialDiv = styled.div`
   display: flex;
   color:#FFA500;
   margin-left: 5rem;
   


   & img {
    width: 1.5rem;
    margin-left:10rem;
    margin-top:1rem;

   

   & p{
    margin-left:5rem;
   }

   

    `;

