import React from 'react'
import { ContainerFlex, DivContainer, HeroMainImage, LeftDiv, RighttDiv } from './HeroStyle'

import heroimg from '../../assets/img/hero-girl.png'

function Hero() {
    return (
       
            <ContainerFlex>
                <LeftDiv>
                    <h1><span>Let's</span>   Explore <span> unique</span>   cloths.</h1>
                    <p>Live for Influential and Innovative fashion!</p>
                    <button>Shop Now</button>
                </LeftDiv>
                <RighttDiv> 
                    <HeroMainImage src={heroimg} alt='image' />
                </RighttDiv>
            </ContainerFlex>
      
    )
}

export default Hero