import { useEffect, useState } from "react";
import itemsData from "../data/itemsData";
import Card from "./Card";

export default function ShopItems(props){

    const changeCartNumber = props.changeCartNumber;
    const currentCart = props.currentCart;
    const changeCurrentCart = props.changeCurrentCart;

    const [counter, changeCounter] = useState(0);

    const alphabeticalItems = itemsData.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);

    function addItem(newItem){
        changeCurrentCart(prevCart => {
            return [...prevCart, newItem];
        });
    };

    function addToCart(e){
        let penName = e.target.parentNode.children[1].innerHTML;
        let indexNumber = alphabeticalItems.findIndex(e => e.name === penName);
        let pen = alphabeticalItems[indexNumber];


        if(currentCart.find(e => e === pen) !== undefined){
            return;
        } else {
            addItem(pen);
            changeCounter(prevCounter => prevCounter + 1);
        };
    };

    useEffect(() => {
        changeCartNumber(currentCart.length);
      }, [counter]);


    return(
        <div className="shoppingItems">
            <Card item={alphabeticalItems[0]} addToCart={addToCart} />
            <Card item={alphabeticalItems[1]} addToCart={addToCart} />
            <Card item={alphabeticalItems[2]} addToCart={addToCart} />
            <Card item={alphabeticalItems[3]} addToCart={addToCart} />
            <Card item={alphabeticalItems[4]} addToCart={addToCart} />
            <Card item={alphabeticalItems[5]} addToCart={addToCart} />
            <Card item={alphabeticalItems[6]} addToCart={addToCart} />
            <Card item={alphabeticalItems[7]} addToCart={addToCart} />
            <Card item={alphabeticalItems[8]} addToCart={addToCart} />
        </div>
    );
};