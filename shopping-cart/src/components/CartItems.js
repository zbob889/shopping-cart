import { useEffect, useState } from "react";
import CartItem from "./CartItem";

export default function CartItems(props){

    const [counter, changeCounter] = useState(0);

    useEffect(() => {

    }, [counter]);

    const currentCart = props.currentCart;
    const changeCurrentCart = props.changeCurrentCart;
    const cartNumber = props.cartNumber;
    const changeCartNumber = props.changeCartNumber;

    const generateCartDisplay = () => {
        let cartDisplay = [];

        currentCart.forEach(pen => {
            cartDisplay.push(<CartItem penName={pen.name} penPrice={pen.price} 
                img={pen.img} quantity={pen.quantity} addQuantity={addQuantity} subtractQuantity={subtractQuantity} />)
        });

        return cartDisplay;
    };

    function addQuantity(e){
        let penName = e.target.parentNode.parentNode.children[1].innerHTML;
        let indexNumber = currentCart.findIndex(e => e.name === penName);
        let pen = currentCart[indexNumber];

        let newQuantity = pen.quantity + 1;
        let newCartNumber = cartNumber + 1;
        console.log(newCartNumber);

        const newCart = currentCart.map(pen => {
            if(pen.name === penName){
                return {...pen, quantity: newQuantity};
            } else{
                return pen;
            };
        });

        changeCurrentCart(newCart);
        changeCartNumber(newCartNumber);
        changeCounter(prevCount => prevCount + 1);
    };

    function subtractQuantity(e){
        let penName = e.target.parentNode.parentNode.children[1].innerHTML;
        let indexNumber = currentCart.findIndex(e => e.name === penName);
        let pen = currentCart[indexNumber];

        let newQuantity = pen.quantity - 1;
        let newCartNumber = cartNumber - 1;

        let newCart;

        if(newQuantity === 0){
            newCart = currentCart.filter(pen => (pen.name !== penName));
        }else if(newQuantity !== 0){
            newCart = currentCart.map(pen => {
                if(pen.name === penName){
                    return {...pen, quantity: newQuantity};
                } else{
                    return pen;
                };
            });
        };

        changeCurrentCart(newCart);
        changeCartNumber(newCartNumber);
        changeCounter(prevCount => prevCount + 1);
    };

    return(
        <div className="cartDisplay">
            {generateCartDisplay()}
        </div>
    );
};