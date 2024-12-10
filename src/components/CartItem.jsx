import { DishCounter } from "./DishCounter";
import { useGetDishesByRestaurantIdQuery } from "@/store/features/api";
import styles from "./CartItem.module.css";

export const CartItem = ({ id }) => {
  const {
    data: dish,
    isLoading,
    isError,
  } = useGetDishesByRestaurantIdQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: restaurantId }) => restaurantId === id),
    }),
  });

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

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
