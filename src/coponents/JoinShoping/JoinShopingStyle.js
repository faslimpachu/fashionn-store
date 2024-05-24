import styled from "styled-components";


export const MainDiv = styled.div`
    width: 100%;
    height: 320px;
    background-color: #E5C643;
    color: white;
    display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
`

export const TextDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-bottom: 10px;

   h1{
    margin: 0px;
   }
   form{
    padding: 15px;
    background-color: white;
    border-radius: 15px;
   
   }
   input{
    padding: 20px 15px;
    border-radius: 15px;
    border: none;
    
   }
   button{
    width: 100px;
    padding: 20px 15px;
    border-radius: 10px;
    border: none;
    background-color: black;
    color: white;
    margin-left: 50px;
   }
   @media (max-width: 330px) {
    
    form{
      padding: 0px;


    }
    button{
      width: auto;
    }

    h1{
      font-size: 30px;
      padding-left: 20px;
     
    }
    p{
      width: 90%;
      margin-top: 0px;
    }

   
       
     }
`