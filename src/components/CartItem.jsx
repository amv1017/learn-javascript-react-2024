import { DishCounter } from "./DishCounter";
import styles from "./CartItem.module.css";

export const CartItem = ({ id }) => {
  const dish = { name: "_dish_" };

  if (!dish) {
    return null;
  }

  return (
    <div className={styles.cartItem}>
      {dish.name}
      <DishCounter id={id} />
    </div>
  );
};
