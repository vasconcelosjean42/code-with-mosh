import { MdCancel } from "react-icons/md";

interface Props {
  cartItems: string[];
  onClick: () => void;
  onClear: () => void;
  onRemove: (product: string) => void;
}

const Cart = ({ cartItems, onClick, onClear, onRemove }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>
            {item} <MdCancel onClick={() => onRemove(item)} />
          </li>
        ))}
      </ul>
      <button onClick={onClick}>Add Item Cart</button>
      <button onClick={onClear}>Clear Cart Items</button>
    </>
  );
};

export default Cart;
