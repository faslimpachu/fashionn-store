import styled from "styled-components";

export const MainDiv = styled.div`
 

margin: 5%;
padding: 15px;

@media (max-width: 330px) {
    
    margin: 0px;

   
       
     }


`
export const DivFlex = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 80px;

@media (max-width: 768px) {
    
    flex-direction: column;
       
     }
    
`
export const DivRight = styled.div`
 
`
export const DivLeft = styled.div`
 
`
export const ImageLeft = styled.img`
width: 100%;
 
`

export const ImageRight = styled.img`
  width: 100%;
 
`
export const SvgDiv = styled.div`
     justify-content: space-between;
`

export const TextDiv = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     
     padding: 15px;

     h3{
        margin: 0px;
     }
     p{
        margin: 0px;
     }
`

