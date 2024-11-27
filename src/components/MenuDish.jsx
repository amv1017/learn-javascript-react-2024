import { useMemo, useState } from "react";
import { Counter } from "./Counter";
import { limitAmount } from "@/functions";
import classNames from "classnames";
import styles from "./MenuDish.module.css";
import { useTheme } from "../hooks";

const MenuDish = ({ dish }) => {
  const [amount, setAmount] = useState(0);

  const { theme } = useTheme();

  const common = useMemo(
    () => ({ [theme == "dark" ? styles.dark : styles.light]: true }),
    [theme],
  );

  return (
    <tr>
      <td className={classNames(styles.name, common)}>{dish.name}</td>
      <td className={classNames(styles.ingredients, common)}>
        {dish.ingredients.join(", ")}
      </td>
      <td className={classNames(styles.price, common)}>{dish.price}</td>
      <td className={classNames(styles.amount, common)}>
        <Counter
          value={amount}
          btnClassName={classNames(styles.amountbutton, common)}
          increment={() => setAmount(limitAmount(amount + 1))}
          decrement={() => setAmount(limitAmount(amount - 1))}
        />
      </td>
    </tr>
  );
};

export { MenuDish };
