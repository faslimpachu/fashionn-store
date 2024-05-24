import styled from "styled-components";

export const MainContainer = styled.div`
   display: flex;
   flex-direction: column;

   background-color: black;
   color: white;

   
`

export const Conatiner = styled.div`
     max-width: 1350px;
     display: flex;
     justify-content: center;

     @media (max-width: 941px) {
       
       flex-direction: column;
       justify-content: center;
       align-items: center;
       
     }
    
`
export const DivItem = styled.div`
   width: 30%;
   padding: 25px;

   @media (max-width: 768px) {
    
    width: auto;

   
       
     }
`
export const DivItem2 = styled.div`
   width: 50%;
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   line-height: 35px;
   gap: 15px;

   @media (max-width: 941px) {
       
     flex-direction: column;
     line-height: 30px;
     
   }
`

export const LogoImage = styled.img`
  width: 180px;
  background-color: white;
  padding: 10px;
  cursor: pointer;


`

export const SvgItem = styled.div`
  padding-right: 10px;

`
export const SvgDiv = styled.div`
    display: flex;
    cursor: pointer;
`
export const DivLi = styled.li`
 list-style-type: none;
 cursor: pointer;
`
