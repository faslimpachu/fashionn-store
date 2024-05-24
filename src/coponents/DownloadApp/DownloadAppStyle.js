import styled from "styled-components";

export const ButtomImage = styled.img`
    width: 20%;
   
`
export const ButtonDiv = styled.div`
   display: flex;
   gap: 20px;
   cursor: pointer;
`

export const MobileImage = styled.img`
  width: 70%;
 
`

export const FlexContainerDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 50px;
  margin-left: 10%;

   h1{
    color: #000;
    font-family: Poppins;
    font-size: 58px;
    font-style: normal;
    font-weight: 900;
    margin: 0px;
    letter-spacing: 2.88px;
   }


   @media (max-width: 768px) {
    
    flex-direction: column;

   
       
     }

     @media (max-width: 430px) {
    
     h1{
      font-size: 30px;
   }

   
       
     }
`