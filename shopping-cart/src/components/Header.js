export default function Header(){
    
    function goHome(){
        window.location.replace('http://localhost:3000/');
    };
    function goShop(){
        window.location.replace('http://localhost:3000/shop');
    };
    function goCart(){
        window.location.replace('http://localhost:3000/cart');
    };

    return(
        <div className="header">
            <p className="title">Claudia's Pens</p>

            <nav className="navigation">
                <button className="navButton" onClick={goHome}>Home</button>
                <button className="navButton" onClick={goShop}>Shop</button>
            </nav>

            <button className="cart" onClick={goCart}>
                <div className="material-icons">shopping_cart</div>
                <div>0</div>
            </button>
        </div>
    );
};