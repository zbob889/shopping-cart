import { useState } from "react";


export default function CartItem(props){

    const img = props.img;
    const name = props.penName;
    const price = props.penPrice;
    const quantity = props.quantity;
    const addQuantity = props.addQuantity;
    const subtractQuantity = props.subtractQuantity;

    const [counter, changeCounter] = useState(quantity);

    function add(){
        changeCounter(prevCount => prevCount + 1);
    };

    function subtract(){
        changeCounter(prevCount => prevCount - 1);

        if(counter === 0){

        }
    };

    return(
        <div className="card">
            <img src={img} alt="" width='300px' />
            <div className="penName">{name}</div>
            <div className="penPrice">€{price}</div>

            <div className="counter">
                <button className="counter--minus" onClick={subtractQuantity}>–</button>
                <div className="counter--count">
                    <h1>{quantity}</h1>
                </div>
                <button className="counter--plus" onClick={addQuantity}>+</button>
            </div>
        </div>
    )
};