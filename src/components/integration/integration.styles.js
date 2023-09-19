import styled from "styled-components";


export const IntegrationParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);

     `;

export const IntegrationWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);
 
    
      `;

export const SummaryContainer = styled.section`
      width: 100%;
      height: 20%;
      

      & p {
     color:#fff;
     margin-left:10rem;
     font-size:1.1rem;
}

    `;

export const SummaryContainer2 = styled.section`
    width: 100%;
    height: 50%;
    display: flex;
   
  `;  

export const SummaryCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction:column;
  gap: 0.5rem;
  justify-content: space-around;
  align-items: center;
  margin-top:1rem;
  margin-left:1rem;
`;  

export const Button = styled.button`
display: flex;
background: #228B22;
width:25rem;
border: 1px solid #228B22; 
border-radius:10px;
color:#FFA500;
height: 5rem;
align-items: center;
justify-content: center;

& img {
  width:2rem;
  margin-right: 1rem;
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
    margin-top:3rem;
    margin-left:37rem;

    & h2 {
        color: #FFA500;
        font-size:2rem;
        line-height:1.5rem;
        font-weight:500;
     }

     
       
    `;



