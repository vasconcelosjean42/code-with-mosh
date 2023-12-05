import { useState } from "react";
import produce from "immer";
import NavBar from "./component/NavBar";
import Cart from "./component/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const handleClick = () => {
    setCartItems((prevState) => [
      ...prevState,
      `Product ${prevState.length + 1}`,
    ]);
  };

  return (
    <>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClick={handleClick}
        onClear={() => setCartItems([])}
        onRemove={(product: string) =>
          setCartItems((prevState) =>
            prevState.filter((item) => item !== product)
          )
        }
      />
    </>
  );
};

export default App;
