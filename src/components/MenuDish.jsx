import { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { Counter } from "@/components";
import { useAuth, useTheme } from "@/hooks";
import { limitAmount } from "@/functions";
import { selectDishById } from "@/store/features/dishes";
import styles from "./MenuDish.module.css";

const MenuDish = ({ id }) => {
  const [amount, setAmount] = useState(0);

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
          <Counter
            value={amount}
            btnClassName={classNames(styles.amountbutton, common)}
            increment={() => setAmount(limitAmount(amount + 1))}
            decrement={() => setAmount(limitAmount(amount - 1))}
          />
        </td>
      )}
    </tr>
  );
};

export { MenuDish };
