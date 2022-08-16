export default function CartFooter(props){

    const currentCart = props.currentCart;

    function findTotal(){
        let prices = currentCart.map(pen => {
            let cost = Number(pen.simplePrice) * Number(pen.quantity);
            return cost;
        });

        if(prices.length === 0){
            return 0;
        }else{
            let total = prices.reduce((a, b) => a + b);
            return total;
        };
    };

    let total = findTotal();

    return(
        <div>Total: €{total},00</div>
    );
}