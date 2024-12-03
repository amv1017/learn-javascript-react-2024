import { useSelector } from "react-redux";
import classNames from "classnames";
import { useTheme } from "@/hooks";
import { selectRestaurantById } from "@/store/features/restaurants";
import styles from "./NavbarItem.module.css";
import { NavLink, useParams } from "react-router";

export const NavbarItem = ({ id }) => {
  const { theme } = useTheme();

  const { id: pageid } = useParams();

  const { name } = useSelector((state) => selectRestaurantById(state, id));

  return (
    <NavLink
      to={`/restaurants/${id}`}
      className={classNames(styles.item, {
        [styles.active]: pageid === id,
        [theme == "dark" ? styles.dark : styles.light]: true,
      })}
    >
      {name}
    </NavLink>
  );
};
