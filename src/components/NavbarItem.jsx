import { useSelector } from "react-redux";
import classNames from "classnames";
import { useTheme } from "@/hooks";
import { selectRestaurantById } from "@/store/features/restaurants";
import styles from "./NavbarItem.module.css";
import { NavLink } from "react-router";

export const NavbarItem = ({ id }) => {
  const { theme } = useTheme();

  const { name } = useSelector((state) => selectRestaurantById(state, id));

  return (
    <li
      className={classNames(styles.item, {
        [styles.active]: true,
        [theme == "dark" ? styles.dark : styles.light]: true,
      })}
      key={id}
    >
      <NavLink to={`/restaurants/${id}`}>{name}</NavLink>
    </li>
  );
};
