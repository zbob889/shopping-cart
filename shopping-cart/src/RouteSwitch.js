import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Home";
import Shop from "./Shop";
import Cart from './Cart';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;