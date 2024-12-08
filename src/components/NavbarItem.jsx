import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router";
import classNames from "classnames";
import { useTheme } from "@/hooks";
import { selectRestaurantById } from "@/store/features/restaurants";
import styles from "./NavbarItem.module.css";

export const NavbarItem = ({ id }) => {
  const { theme } = useTheme();

  const { name, description } =
    useSelector((state) => selectRestaurantById(state, id)) ?? {};

  const { id: paramid } = useParams();

  if (!name || !description) {
    return;
  }

  return (
    <NavLink
      to={`/restaurants/${id}/menu`}
      className={classNames(
        styles.item,
        id === paramid ? styles.active : "",
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      {name}
    </NavLink>
  );
};
