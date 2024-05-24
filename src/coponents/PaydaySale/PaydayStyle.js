import styled from "styled-components";


export const MainConatiner = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10%;

@media (max-width: 1084px) {
       
      flex-direction: column ;
         
       }


`



export const ContainerLeft = styled.div`

`

export const ContainerRight = styled.div`
  margin-left: 5%;



h1{
    color: #000;
font-family: Poppins;
font-size: 70px;
font-style: normal;
font-weight: 900;
margin: 0px;

}
span{
    background-color: yellow;
    padding: 10px;
}

@media (max-width: 1084px) {
       
       margin-top:5% ;
          
        }
 
 @media (max-width: 401px) {
    padding: 20%;
     h1{
        font-size: 50px;
        
     }
     span{
        padding: 5px;
     }
          
        }
 
 `





export const PayDayImgAsset = styled.img`

@media (max-width: 534px) {
       
      width: 100%;
          
        }

`

export const Button = styled.button`
   padding: 10px 15px;
    background-color: black;
    color: white;
    border-radius: 10px;
    width: 150px;
    border: none;
    margin-bottom: 10px;
    font-size: 20px;

`




