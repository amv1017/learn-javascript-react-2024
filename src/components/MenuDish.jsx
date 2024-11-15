import { useState } from "react";

const limitAmount = (amount, min = 0, max = 5) =>
  amount < min ? min : amount > max ? max : amount;

export default function MenuDish({ dish }) {
  const [amount, setAmount] = useState(0);

  return (
    <tr>
      <td width={"30%"}>{dish.name}</td>
      <td width={"40%"}> {dish.ingredients.join(", ")}</td>
      <td width={"10%"}>{dish.price}</td>
      <td className="amount">
        <button onClick={() => setAmount(limitAmount(amount + 1))}>+</button>
        {amount}
        <button onClick={() => setAmount(limitAmount(amount - 1))}>-</button>
      </td>
    </tr>
  );
}
