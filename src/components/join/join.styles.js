import styled from "styled-components";


export const JoinParent = styled.div`
    width: 100vw;
    height: 105vh;
    display: flex;
    flex-direction: column;
    background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);

     `;

export const JoinWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);
 
    
      `;

export const SummaryContainer = styled.section`
      width: 100%;
      height: 70%;
      display:flex;
      

      & form {
        width:30%;
        margin-left:30rem;
        height:100%;
        margin-top:2rem;
       
      }

    `;
export const SummaryContainer2 = styled.section`
    width: 100%;
    height: 50%;
    display:flex;
   
   
  `;  

export const SummaryCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction:column;

  & img {
    width:1.2rem;
    margin-right:1rem;
  }
  
  
  & p{
    color: #fff;
    margin-left:3rem;
    line-height:0.5rem;

  }



`;  
export const Button = styled.button`
display: flex;
background:linear-gradient(150deg, #FFA500 30%, #228B22);
width:10rem;
border: 1px solid #228B22; 
border-radius:10px;
color:#fff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-top: 1rem;
margin-left: 6rem;
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
    margin-left:15rem;

    & h2 {
        color: #FFA500;
        font-size:2rem;
        line-height:1.5rem;
        font-weight:500;
        margin-left:15rem;

     }

     & h3 {
      color: #fff;
      font-size:1rem;
      line-height:1rem;
      font-weight:300;
      margin-left:20rem;

   }

   & h4 {
    color: #fff;
    font-size:1rem;
    line-height:0.1rem;
    font-weight:300;
    margin-left:5rem;
 }

     
       
    `;



