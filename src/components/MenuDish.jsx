import { useState } from "react";
import { Counter } from "./Counter";
import { limitAmount } from "../functions";

const MenuDish = ({ dish }) => {
  const [amount, setAmount] = useState(0);

  return (
    <tr>
      <td width={"30%"}>{dish.name}</td>
      <td width={"40%"}> {dish.ingredients.join(", ")}</td>
      <td width={"10%"}>{dish.price}</td>
      <td className="amount">
        <Counter
          value={amount}
          increment={() => setAmount(limitAmount(amount + 1))}
          decrement={() => setAmount(limitAmount(amount - 1))}
        />
      </td>
    </tr>
  );
};

export { MenuDish };
