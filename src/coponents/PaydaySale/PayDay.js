import React from 'react'
import paydayimg from '../../assets/img/pay-day-original.png'

import { Button, ContainerLeft, ContainerRight, MainConatiner, PayDayImgAsset } from './PaydayStyle'

function PayDay() {
    return (
        <>
            <MainConatiner>
                <ContainerLeft>
                    <PayDayImgAsset src={paydayimg} />

                </ContainerLeft>
                <ContainerRight>
                    <h1> <span>PAYDAY</span> <br/> SALE NOW </h1>
                    <p>Spend minimal $100 get 30% off
                     voucher code for your next purchase</p>
                     <h3>1 June - 10 June 2021</h3>
                     <p>*Terms & Conditions apply</p>
                     <Button>SHOP NOW</Button>
                     

                </ContainerRight>

            </MainConatiner>
        </>

    )
}

export default PayDay