import React from 'react'
import { DivFlex, DivH1, DivLeft, DivRight, ImageLeft, ImageRight, MainDiv, TextDiv } from './YoungerStyle'

import Image1 from '../../assets/img/youngs-fav-img (1).png'
import Image2 from '../../assets/img/youngs-fav-img (2).png'


function Youngers() {
    return (
        <>


            <MainDiv>
                <h1> Young’s Favourite</h1>
                <DivFlex>
                    <DivLeft>
                        <ImageLeft src={Image1} alt='image' />
                        <TextDiv>
                            <div>
                                <h3>Trending On instagram</h3>
                                <p>Explore Now!</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="23" viewBox="0 0 34 23" fill="none">
                                    <path d="M33.0607 12.5607C33.6464 11.9749 33.6464 11.0251 33.0607 10.4393L23.5147 0.893398C22.9289 0.307611 21.9792 0.307611 21.3934 0.893398C20.8076 1.47919 20.8076 2.42893 21.3934 3.01472L29.8787 11.5L21.3934 19.9853C20.8076 20.5711 20.8076 21.5208 21.3934 22.1066C21.9792 22.6924 22.9289 22.6924 23.5147 22.1066L33.0607 12.5607ZM0 13L32 13V10L0 10L0 13Z" fill="#797979" />
                                </svg>
                            </div>


                        </TextDiv>

                    </DivLeft>
                    <DivRight>
                        <ImageRight src={Image2} alt='image' />
                        <TextDiv>
                            <div>
                                <h3>All Under $40</h3>
                                <p>Explore Now!</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="23" viewBox="0 0 34 23" fill="none">
                                    <path d="M33.0607 12.5607C33.6464 11.9749 33.6464 11.0251 33.0607 10.4393L23.5147 0.893398C22.9289 0.307611 21.9792 0.307611 21.3934 0.893398C20.8076 1.47919 20.8076 2.42893 21.3934 3.01472L29.8787 11.5L21.3934 19.9853C20.8076 20.5711 20.8076 21.5208 21.3934 22.1066C21.9792 22.6924 22.9289 22.6924 23.5147 22.1066L33.0607 12.5607ZM0 13L32 13V10L0 10L0 13Z" fill="#797979" />
                                </svg>
                            </div>


                        </TextDiv>
                    </DivRight>



                </DivFlex>


            </MainDiv>



        </>
    )
}

export default Youngers