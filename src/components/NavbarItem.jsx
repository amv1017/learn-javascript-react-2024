import { NavLink, useParams } from "react-router";
import classNames from "classnames";
import { useTheme } from "@/hooks";
import { useGetRestaurantByIdQuery } from "@/store/features/api";
import styles from "./NavbarItem.module.css";

export const NavbarItem = ({ id }) => {
  const { theme } = useTheme();

  const { id: paramid } = useParams();

  const { data, isLoading, isError } = useGetRestaurantByIdQuery(id);

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

  if (!data?.name || !data?.description) {
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
      {data.name}
    </NavLink>
  );
};
