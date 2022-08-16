import Header from "./components/Header";
import Pens from "./components/Pens";

export default function App(props) {

  const currentCart = props.currentCart;
  const changeCurrentCart = props.changeCurrentCart;
  const cartNumber = props.cartNumber;
  const changeCartNumber = props.changeCartNumber;

  return(
    <div className="page">
      <Header cartNumber={cartNumber} />
      <Pens />
    </div>
  );
};
