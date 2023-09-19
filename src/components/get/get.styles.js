import styled from "styled-components";


export const GetParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);

     `;

export const GetWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:linear-gradient(150deg, #1C471C 40%, #513D1E, #1C471C 40%, #513D1E);
 
    
      `;

export const SummaryContainer = styled.section`
      width: 100%;
      height: 50%;
      gap: 1.5rem;
      justify-content: space-around;
      align-items: center;
      margin-top:1rem;

    & h1 {
        color: #fff;
        font-size:3rem;
        margin-left:25rem;
        margin-top:3rem;
    }

    & p{
        color: #fff;
        font-size:1rem;
        margin-left:25rem;
    }

    `;




export const Button = styled.button`
display: flex;
background: linear-gradient(150deg, #FFA500 30%, #228B22);
width:10rem;
border: 1px solid #228B22; 
border-radius:10px;
color:#fff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:37rem;
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

    & img {
        width:15rem;
    }

   

     
       
    `;



