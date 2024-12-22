import { getDishesByRestaurantId } from "@/services/get-dishes-by-restaurant-id";
import styles from "./CartItem.module.css";
import { DishCounter } from "./DishCounter";

export const CartItem = async ({ id }) => {
  const dish = await getDishesByRestaurantId(id);

  if (!dish?.name) {
    return;
  }

  return (
    <div className={styles.cartItem}>
      {dish.name}
      <DishCounter id={id} />
    </div>
  );
};
