import React from 'react'
import { BrandDiv, BrandImg } from './BrandLogoStyle'
import brnd from '../../assets/img/Frame 8.png'

function BrandLogo() {
  return (
    <BrandDiv>
    <BrandImg src={brnd} alt="image" />
    </BrandDiv>
  )
}

export default BrandLogo