import { useState } from "react";
import Header from "./components/Header";
import ShopItems from './components/ShopItems'

export default function Shop(props){

    const currentCart = props.currentCart;
    const changeCurrentCart = props.changeCurrentCart;
    const cartNumber = props.cartNumber;
    const changeCartNumber = props.changeCartNumber;

    return(
        <div>
            <Header cartNumber={cartNumber} />
            <ShopItems currentCart={currentCart} changeCurrentCart={changeCurrentCart} changeCartNumber={changeCartNumber} />
        </div>
    )
}