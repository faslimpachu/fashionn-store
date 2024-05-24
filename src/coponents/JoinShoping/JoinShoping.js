import React, { useState } from 'react';
import { MainDiv, TextDiv } from './JoinShopingStyle';

function JoinShopping() {
 

  return (
    <MainDiv>
      <TextDiv>
        <h1>JOIN SHOPPING COMMUNITY  TO GET MONTHLY PROMO</h1>
        <p>Type your email down below and be part of the young, wild generation</p>
        <form>
          <input type="text"  placeholder="Email" />
          <button>Send</button>
        </form>
      </TextDiv>
    </MainDiv>
  );
}

export default JoinShopping;
