import classNames from "classnames";
import { useTheme } from "@/hooks";
import styles from "./NavbarItem.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../store/features/restaurants";

export const NavbarItem = ({ id, onClick, isActive }) => {
  const { theme } = useTheme();

  const { name } = useSelector((state) => selectRestaurantById(state, id));

  return (
    <li
      onClick={onClick}
      className={classNames(styles.item, {
        [styles.active]: isActive,
        [theme == "dark" ? styles.dark : styles.light]: true,
      })}
      key={id}
    >
      <span>{name}</span>
    </li>
  );
};
