import classNames from "classnames";
import { NavLink } from "react-router";
import { DishCounter } from "./DishCounter";
import { useAuth, useTheme } from "@/hooks";
import styles from "./MenuDish.module.css";

const MenuDish = ({ id, ingredients, name, price }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const common = theme == "dark" ? styles.dark : styles.light;

  return (
    <tr>
      <td className={classNames(styles.name, common)}>
        <NavLink to={`/dish/${id}`}>{name}</NavLink>
      </td>
      <td className={classNames(styles.ingredients, common)}>
        {ingredients.join(", ")}
      </td>
      <td className={classNames(styles.price, common)}>{price}</td>
      {user.name && (
        <td className={classNames(styles.amount, common)}>
          <DishCounter id={id} />
        </td>
      )}
    </tr>
  );
};

export { MenuDish };
