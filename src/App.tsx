import { useState } from "react";
import produce from "immer";
import NavBar from "./component/NavBar";
import Cart from "./component/Cart";

interface ItemProps {
  id: number;
  title: string;
  quantity: number;
}

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: [...cart.items].map((item: ItemProps) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });

    setCart(
      produce((draft) => {
        const item = draft.items.find((item: ItemProps) => item.id === 1);
        if (item) item.quantity = 2;
      })
    );
  };

  return (
    <>
      <button onClick={handleClick}>Mudar o nome</button>
    </>
  );
};

export default App;
