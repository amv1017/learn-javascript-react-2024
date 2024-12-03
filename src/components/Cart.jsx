import { useSelector } from "react-redux";
import { CartItem } from "@/components";
import { selectCartItems } from "@/store/features/cart";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return;
  }

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {items.map(({ id }) => (
          <li key={id}>
            <CartItem id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
