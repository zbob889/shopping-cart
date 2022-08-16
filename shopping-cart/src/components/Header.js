import { Link, NavLink } from "react-router-dom";

export default function Header(props){


    const currentCart = props.currentCart;

    function findTotal(){
        let quantities = currentCart.map(pen => {
            let quantity = Number(pen.quantity);
            return quantity;
        });

        if(quantities.length === 0){
            return 0;
        }else{
            let total = quantities.reduce((a, b) => a + b);
            return total;
        };
    };

    let cartNumber = findTotal();

    return(
        <div className="header">
            <p className="title">Claudia's Pens</p>

            <nav className="navigation">
                <NavLink to='/' className='navButton'>Home</NavLink>
                <NavLink to='/shop' className='navButton'>Shop</NavLink>
            </nav>

            <NavLink to='/cart' className='cart'>
                <div className="material-icons">shopping_cart</div>
                <div>{cartNumber}</div>
            </NavLink>
        </div>
    );
};