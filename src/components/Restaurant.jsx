import { useSelector } from "react-redux";
import { Outlet, NavLink, useLocation } from "react-router";
import classNames from "classnames";
import { ReviewForm } from "./ReviewForm";
import { useAuth, useTheme } from "@/hooks";
import { selectRestaurantById } from "@/store/features/restaurants";
import styles from "./Restaurant.module.css";
import { useRequest } from "@/hooks";
import { getDishes } from "@/store/features/dishes";
import { getReviews } from "@/store/features/reviews";

const Restaurant = ({ id }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const { pathname } = useLocation();

  const { name } =
    useSelector((state) => selectRestaurantById(state, id)) ?? {};

  const requestMenuStatus = useRequest(getDishes);
  const requestReviewsStatus = useRequest(getReviews);

  if (!name) {
    return;
  }

  if (requestMenuStatus === "pending" || requestReviewsStatus === "pending") {
    return "loading ...";
  }

  if (requestMenuStatus === "rejected" || requestReviewsStatus === "rejected") {
    return "error";
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
