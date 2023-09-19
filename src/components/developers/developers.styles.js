import styled from "styled-components";


export const DevelopersParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);

     `;

export const DevelopersWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);
 
    
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
    
export const Header = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content:left;
    align-content: left;
    margin-top:3rem;
    margin-left:35rem;

    & h2 {
        color: #FFA500;
        font-size:2rem;
        line-height:1.5rem;
        font-weight:500;
     }

     
       
    `;



