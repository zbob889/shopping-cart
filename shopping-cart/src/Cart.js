import Header from "./components/Header";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import { useState } from "react";

export default function Cart(props) {

  const currentCart = props.currentCart;
  const changeCurrentCart = props.changeCurrentCart;
  const cartNumber = props.cartNumber;
  const changeCartNumber = props.changeCartNumber;

  return(
    <div className="page">
      <Header cartNumber={cartNumber} />
      <CartItems currentCart={currentCart} changeCurrentCart={changeCurrentCart} />
      <CartFooter />
    </div>
  );
};
