import styled from "styled-components";


export const AboutParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#fff;

     `;

export const AboutWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#fff;
 
    
      `;

export const SummaryContainer = styled.section`
      width: 100%;
      height: 50%;
      
      & p{
        margin-left: 15rem;
      }
    `;
    
export const Header = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content:left;
    align-content: left;
   margin-left:35rem;

    & h2 {
        color: #228B22;
        font-size:1rem;
        line-height:1.5rem;
        margin-left:7rem;
     }

     & h3 {
        color: #000;
        font-size:2rem;
        line-height:0.1rem;
        font-weight:600;
     }
       
    `;



export const LButton = styled.button`
display: flex;
background:#fff;
width:10rem;
border: 2px solid #FFA500; 
border-radius:10px;
color:#000;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:38rem;
margin-top:2rem;

`;