import Header from "./components/Header";
import Pens from "./components/Pens";

export default function App(props) {

  const cartNumber = props.cartNumber;
  const currentCart = props.currentCart;

  return(
    <div className="page">
      <Header currentCart={currentCart} />
      <Pens />
    </div>
  );
};
