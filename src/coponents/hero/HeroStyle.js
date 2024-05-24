import styled from "styled-components";


export const ContainerFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F4F6F5;
    border-radius: 20px;
    width: 95%;
    margin-left: 2.4%;
    margin-top: 15px;
  

    @media (max-width: 1024px) {
     flex-direction: column;


   
       
  }
    
 
`

export const HeroMainImage = styled.img`
  width: 80%;

  @media (max-width: 1024px) {
   display: none;


   
       
  }
 
`

export const LeftDiv = styled.div`
   text-transform: uppercase;
    margin-left: 200px;
   
   h1{
    color: #000;
    font-family: Poppins;
    font-size: 80px;
    font-style: normal;
    font-weight: 900;
    margin: 0px;
    padding-top: 15px;
   }
   span{
    background-color: yellow;
    padding: 5px;
   flex-shrink: 0;
   transform: rotate(45deg);
   }
   button{
    padding: 10px 15px;
    background-color: black;
    color: white;
    border-radius: 10px;
    width: 150px;
    border: none;
    margin-bottom: 10px;
    font-size: 20px;
    

   }

   @media (max-width: 941px) {
    
    margin: 0px;
    h1{
      font-size: 40px;
    }


    @media (max-width: 330px) {
     margin-left: 50px;
     margin-bottom: 10px;


   
       
  }
       
     }
  
`
export const RighttDiv = styled.div`
   display: flex;
   justify-content: flex-end;
`