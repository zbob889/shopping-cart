import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Home";
import Shop from "./Shop";
import Cart from './Cart';
import { useState } from "react";

const RouteSwitch = () => {

  const [currentCart, changeCurrentCart] = useState([]);
  const [cartNumber, changeCartNumber] = useState(0);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App 
          currentCart={currentCart} 
          changeCurrentCart={changeCurrentCart} 
          cartNumber={cartNumber} 
          changeCartNumber={changeCartNumber} />} />
        <Route path="/shop" element={<Shop
          currentCart={currentCart} 
          changeCurrentCart={changeCurrentCart} 
          cartNumber={cartNumber} 
          changeCartNumber={changeCartNumber} />} />
        <Route path="/cart" element={<Cart 
          currentCart={currentCart} 
          changeCurrentCart={changeCurrentCart} 
          cartNumber={cartNumber} 
          changeCartNumber={changeCartNumber} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;