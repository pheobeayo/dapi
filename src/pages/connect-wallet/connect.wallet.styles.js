import styled from "styled-components";
import { device } from "../../utils/device";


export const ConnectWalletParent = styled.div`
    width: 100vw;
    height: 150vh;
    display: flex;
    flex-direction: column;
    background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);
`;

export const ConnectWalletWrapper = styled.div`
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



export const Header = styled.div`
      width: 70%;
      height: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;
      align-content: center;
      margin-left:13rem;
      margin-top:3rem;
  
      & h2 {
          color: #FFA500;
          font-size:2rem;
          line-height:1.5rem;
       }
  
      
  
      
         
      `;
  
      



export const SummaryContainer = styled.section`
      width: 100%;
      height: 30%;
      display: flex;
      gap: 0.1rem;
      justify-content: space-around;
      align-items: center;
      margin-right:2rem;
      padding-right:2rem;
    `;

export const SummaryContainer2 = styled.section`
    width: 100%;
    height: 30%;
    display: flex;
    gap: 0.1rem;
    justify-content: space-around;
    align-items: center;
    margin-right:2rem;
    padding-right:2rem;
    margin-top: 2rem;
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

