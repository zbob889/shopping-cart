import itemsData from "../data/itemsData";
import Card from "./Card";

export default function ShopItems(){

    const alphabeticalItems = itemsData.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);

    let currentCart = [];

    function addToCart(e){
        let penName = e.target.parentNode.children[1].innerHTML;
        let indexNumber = alphabeticalItems.findIndex(e => e.name === penName);
        if(currentCart.find(e => e == alphabeticalItems[indexNumber]) != undefined){
            return;
        } else {
            currentCart.push(alphabeticalItems[indexNumber]);
        };
    };


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