import { useSelector } from "react-redux";
import { DishCounter } from "@/components";
import { selectDishById } from "@/store/features/dishes";
import styles from "./CartItem.module.css";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

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
