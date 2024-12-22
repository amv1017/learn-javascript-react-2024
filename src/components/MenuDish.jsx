"use client";

import { useAuth, useTheme } from "@/hooks";
import { getDishById } from "@/services/get-dish-by-id";
import classNames from "classnames";
import Link from "next/link";
import { use } from "react";
import { DishCounter } from "./DishCounter";
import styles from "./MenuDish.module.css";

const MenuDish = ({ id }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const common = theme == "dark" ? styles.dark : styles.light;

  const data = use(getDishById(id));

  if (!data?.name) {
    return;
  }

  return (
    <tr>
      <td className={classNames(styles.name, common)}>
        <Link href={`/dish/${id}`}>{data.name}</Link>
      </td>
      <td className={classNames(styles.ingredients, common)}>
        {data.ingredients.join(", ")}
      </td>
      <td className={classNames(styles.price, common)}>{data.price}</td>
      {user.name && (
        <td className={classNames(styles.amount, common)}>
          <DishCounter id={id} />
        </td>
      )}
    </tr>
  );
};

export { MenuDish };
