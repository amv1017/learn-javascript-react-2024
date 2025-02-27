"use client";

import classNames from "classnames";
import Link from "next/link";
import { DishCounter } from "./DishCounter";
import { useAuth, useTheme } from "@/hooks";
import styles from "./MenuDish.module.css";
import { useGetDishByIdQuery } from "@/store/features/api";

const MenuDish = ({ id }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const common = theme == "dark" ? styles.dark : styles.light;

  const { data, isLoading, isError } = useGetDishByIdQuery(id);

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

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
