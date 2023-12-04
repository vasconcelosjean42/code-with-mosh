import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup/ListGroup";
import Dismissing from "./component/DismissingAlert";
import Like from "./component/Like/Like";

const App = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <>
      {drink.price}
      <button onClick={handleClick}>Mudar nome</button>
    </>
  );
};

export default App;
