import { Link, NavLink } from "react-router-dom";

export default function Header(props){

    return(
        <div className="header">
            <p className="title">Claudia's Pens</p>

            <nav className="navigation">
                <NavLink to='/' className='navButton'>Home</NavLink>
                <NavLink to='/shop' className='navButton'>Shop</NavLink>
            </nav>

            <NavLink to='/cart' className='cart'>
                <div className="material-icons">shopping_cart</div>
                <div>{props.cartNumber}</div>
            </NavLink>
        </div>
    );
};