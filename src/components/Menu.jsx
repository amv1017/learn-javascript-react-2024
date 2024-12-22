"use client";

import { useAuth, useTheme } from "@/hooks";
import { getDishesByRestaurantId } from "@/services/get-dishes-by-restaurant-id";
import classNames from "classnames";
import { use } from "react";
import styles from "./Menu.module.css";
import { MenuDish } from "./MenuDish";

const Menu = ({ id }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const common = theme == "dark" ? styles.dark : styles.light;

  const data = use(getDishesByRestaurantId(id));

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
