"use client";

import classNames from "classnames";
import { MenuDish } from "./MenuDish";
import { useAuth, useTheme } from "@/hooks";
import { useGetDishesByRestaurantIdQuery } from "@/store/features/api";
import styles from "./Menu.module.css";

const Menu = ({ id }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const common = theme == "dark" ? styles.dark : styles.light;

  const { data, isLoading, isError } = useGetDishesByRestaurantIdQuery(id);

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

  return data ? (
    <table
      className={classNames({
        [user.name ? styles.maxTable : styles.minTable]: true,
      })}
    >
      <tr>
        <th className={common}>Name</th>
        <th className={common}>Ingredients</th>
        <th className={common}>Price</th>
        {user.name && <th className={common}>Amount</th>}
      </tr>
      {data.map((dish) => (
        <MenuDish {...dish} key={dish.id} />
      ))}
    </table>
  ) : (
    <span>menu not found</span>
  );
};

export { Menu };
