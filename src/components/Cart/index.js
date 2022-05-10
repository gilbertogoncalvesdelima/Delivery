import React from "react";
import { CartArea, CartHeader, CartIcon, CartText, CartBody } from "./styled";

export default () => {
  return (
    <CartArea>
      {/*Cabeça do meu carrinho*/}
      <CartHeader>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho (x)</CartText>
      </CartHeader>
      {/*Corpo do meu carrinho*/}
      <CartBody></CartBody>
    </CartArea>
  );
};
