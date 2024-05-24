import styled from "styled-components";


export const MainFlexContainer= styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: 450px) {
    
   flex-direction: column;
   margin-bottom: 50px;
       
     }

 
`


export const ImageContainer = styled.div`
     margin-top: 20px;
     padding: 15px;
     margin-left: 90px;

     @media (max-width: 320px) {
    
   margin-left: 0px;

   
       
     }

    
`

export const ImageItem = styled.img`
   width: 70%;

   @media (max-width: 320px) {
    
      width: 100%;

   
       
     }
`

export const TextContentDiv = styled.div`
     display: flex;
     justify-content: flex-start;
     align-items: center;
     gap: 50px;

     h3{
        margin-bottom: 0px;
     }
     p{
        margin-top: 0px;
     }
     svg{
      width: 30px;


      &:hover{
        
         background-color: white;
         border: 1px solid black;
         border-radius: 10px;
         padding: 10px 35px;
         cursor: pointer;
      }
     }

     @media (max-width: 1024px) {
    
    gap: 20px;
       
     }

     @media (max-width: 768px) {
    
    display: block;
       
     }

     @media (max-width: 450px) {
    
    
    margin-bottom: 50px;

    svg{
      background-color: white;
         border: 1px solid black;
         border-radius: 10px;
         padding: 10px 35px;
         cursor: pointer;
    }
        
      }
`

