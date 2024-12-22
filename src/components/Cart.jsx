import { useTheme } from "@/hooks";
import { selectCartItems } from "@/store/features/cart";
import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { theme } = useTheme();

  const items = useSelector(selectCartItems);

  if (!items.length) {
    return;
  }

  return (
    <div
      className={classNames(
        styles.cart,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <h3>Cart</h3>
      <hr />
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
