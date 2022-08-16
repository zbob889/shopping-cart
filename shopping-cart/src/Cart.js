import Header from "./components/Header";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";

export default function Cart() {

  return(
    <div className="page">
      <Header />
      <CartItems />
      <CartFooter />
    </div>
  );
};
