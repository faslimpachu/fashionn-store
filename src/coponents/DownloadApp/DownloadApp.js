import React from 'react'
import { ButtomImage, ButtonDiv, FlexContainerDiv, MobileImage } from './DownloadAppStyle'

import apple from '../../assets/img/apple.png'
import google from '../../assets/img/google.png'
import mobile from '../../assets/img/Mobile app.png'

function DownloadApp() {
    return (
        <>

            <FlexContainerDiv>
                <div>
                    <h1>DOWNLOAD APP & <br/> GET THE VOUCHER!</h1>
                    <p>Get 30% off for first transaction using
                        Rondovision mobile app for now.</p>

                    <ButtonDiv>
                        <ButtomImage src={apple} alt='image' />
                        <ButtomImage src={google} alt='image' />
                    </ButtonDiv>
                </div>
                <div>
                     <MobileImage src={mobile} alt='image' />
                </div>
            </FlexContainerDiv>
        </>
    )
}

export default DownloadApp