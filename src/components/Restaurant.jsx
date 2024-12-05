import { useSelector } from "react-redux";
import { Outlet, NavLink, useLocation } from "react-router";
import classNames from "classnames";
import { ReviewForm } from "./ReviewForm";
import { useAuth, useTheme } from "@/hooks";
import { selectRestaurantById } from "@/store/features/restaurants";
import styles from "./Restaurant.module.css";

const Restaurant = ({ id }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const { pathname } = useLocation();

  const { name } =
    useSelector((state) => selectRestaurantById(state, id)) ?? {};

  if (!name) {
    return;
  }

  const link = pathname.slice(0, pathname.lastIndexOf("/"));

  return (
    <div
      className={classNames(
        styles.restaurant,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <h2>{name}</h2>

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

      <hr />

      {user.name && <ReviewForm />}
    </div>
  );
};

export { Restaurant };
