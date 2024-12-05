import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import classNames from "classnames";
import { useTheme } from "@/hooks";
import { selectRestaurantById } from "@/store/features/restaurants";
import styles from "./NavbarItem.module.css";

export const NavbarItem = ({ id }) => {
  const { theme } = useTheme();

  const { name } = useSelector((state) => selectRestaurantById(state, id));

  return (
    <NavLink
      to={`/restaurants/${id}/menu`}
      className={({ isActive }) =>
        classNames(
          styles.item,
          isActive ? styles.active : "",
          theme == "dark" ? styles.dark : styles.light,
        )
      }
    >
      {name}
    </NavLink>
  );
};
