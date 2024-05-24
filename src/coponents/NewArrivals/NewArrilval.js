import React from 'react'

import img1 from '../../assets/img/new-arrivals-img (1).png'
import img2 from '../../assets/img/new-arrivals-img (2).png'
import img3 from '../../assets/img/new-arrivals-img (3).png'

import { ImageContainer, ImageItem, MainFlexContainer, TextContentDiv } from './NewArrivalsStyle'

function NewArrilval() {
    return (
        <>
            <ImageContainer>
                
                <div>
                <h1>NEW ARRIVALS</h1>
                </div>
                
                <MainFlexContainer>
                    <div>
                        <ImageItem src={img1} />
                        <TextContentDiv>
                            <div>
                                <h3>Hoodies & Sweetshirt</h3>
                                <p>Explore Now!</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
                                    <path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z" fill="#797979" />
                                </svg>
                            </div>
                        </TextContentDiv>
                    </div>
                    <div>
                        <ImageItem src={img2} />
                        <TextContentDiv>
                            <div>
                                <h3>Hoodies & Sweetshirt</h3>
                                <p>Explore Now!</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
                                    <path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z" fill="#797979" />
                                </svg>
                            </div>
                        </TextContentDiv>
                    </div>
                    <div>
                        <ImageItem src={img3} />
                        <TextContentDiv>
                            <div>
                                <h3>Hoodies & Sweetshirt</h3>
                                <p>Explore Now!</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
                                    <path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z" fill="#797979" />
                                </svg>
                            </div>
                        </TextContentDiv>
                    </div>



                </MainFlexContainer>

            </ImageContainer>


        </>
    )
}

export default NewArrilval