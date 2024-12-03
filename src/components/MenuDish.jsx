import { useSelector } from "react-redux";
import classNames from "classnames";
import { useAuth, useTheme } from "@/hooks";
import { selectDishById } from "@/store/features/dishes";
import styles from "./MenuDish.module.css";
import { DishCounter } from "./DishCounter";

const MenuDish = ({ id }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const dish = useSelector((state) => selectDishById(state, id));

  const common = theme == "dark" ? styles.dark : styles.light;

  return (
    <tr>
      <td className={classNames(styles.name, common)}>{dish.name}</td>
      <td className={classNames(styles.ingredients, common)}>
        {dish.ingredients.join(", ")}
      </td>
      <td className={classNames(styles.price, common)}>{dish.price}</td>
      {user.name && (
        <td className={classNames(styles.amount, common)}>
          <DishCounter id={id} />
        </td>
      )}
    </tr>
  );
};

export { MenuDish };
