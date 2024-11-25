import { useState } from "react";
import { Counter } from "./Counter";
import { limitAmount } from "@/functions";
import styles from "./MenuDish.module.css";

const MenuDish = ({ dish }) => {
  const [amount, setAmount] = useState(0);

  return (
    <tr>
      <td className={styles.name}>{dish.name}</td>
      <td className={styles.ingredients}> {dish.ingredients.join(", ")}</td>
      <td className={styles.price}>{dish.price}</td>
      <td className="amount">
        <Counter
          value={amount}
          btnClassName={styles.amountbutton}
          increment={() => setAmount(limitAmount(amount + 1))}
          decrement={() => setAmount(limitAmount(amount - 1))}
        />
      </td>
    </tr>
  );
};

export { MenuDish };
