import { MenuDish } from "./MenuDish";
import styles from "./Menu.module.css";
import { useTheme } from "../context/Theme";
import { useMemo } from "react";
import classNames from "classnames";

const Menu = ({ menu }) => {
  const { theme } = useTheme();

  const common = useMemo(
    () => ({ [theme == "dark" ? styles.dark : styles.light]: true }),
    [theme],
  );

  return menu ? (
    <table>
      <tr>
        <th className={classNames(common)}>Name</th>
        <th className={classNames(common)}>Ingredients</th>
        <th className={classNames(common)}>Price</th>
        <th className={classNames(common)}>Amount</th>
      </tr>

      {menu.map((dish) => (
        <MenuDish dish={dish} key={dish.id} />
      ))}
    </table>
  ) : (
    <span>menu not found</span>
  );
};

export { Menu };
