export default function Card(props){
    
    const {img, name, price} = props.item;

    const addToCart = props.addToCart;

    return(
        <div className="card">
            <img src={img} alt="" width='300px' />
            <div className="penName">{name}</div>
            <div className="penPrice">€{price}</div>
            <button className="addCart" onClick={addToCart}>ADD TO CART</button>
        </div>
    )
};