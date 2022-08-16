export default function Header(){

    return(
        <div className="header">
            <p className="title">Claudia's Pens</p>

            <nav className="navigation">
                <button className="navButton">Home</button>
                <button className="navButton">Shop</button>
            </nav>

            <button className="cart">
                <div className="material-icons">shopping_cart</div>
                <div>0</div>
            </button>
        </div>
    );
};