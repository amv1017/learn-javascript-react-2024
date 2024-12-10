import { Outlet, NavLink, useLocation } from "react-router";
import classNames from "classnames";
import { useTheme } from "@/hooks";
import { useGetRestaurantByIdQuery } from "@/store/features/api";
import styles from "./Restaurant.module.css";

const Restaurant = ({ id }) => {
  const { theme } = useTheme();

  const { pathname } = useLocation();

  const link = pathname.slice(0, pathname.lastIndexOf("/"));

  const { data, isLoading, isError } = useGetRestaurantByIdQuery(id);

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
    <div
      className={classNames(
        styles.restaurant,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <h2>{data.name}</h2>

      <NavLink
        className={({ isActive }) =>
          classNames(
            isActive ? styles.active : "",
            styles.tab,
            theme == "dark" ? styles.dark : styles.light,
          )
        }
        to={`${link}/menu`}
      >
        MENU
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          classNames(
            isActive ? styles.active : "",
            styles.tab,
            theme == "dark" ? styles.dark : styles.light,
          )
        }
        to={`${link}/reviews`}
      >
        REVIEWS
      </NavLink>

      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export { Restaurant };
