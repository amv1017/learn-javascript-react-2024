import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Outlet, NavLink, useLocation } from "react-router";
import classNames from "classnames";
import { ReviewForm } from "@/components";
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

  const link = useMemo(
    () => pathname.slice(0, pathname.lastIndexOf("/")),
    [pathname],
  );

  return (
    <div
      className={classNames(
        styles.restaurant,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <h2>{name}</h2>

      <NavLink to={`${link}/menu`}>{"MENU"}</NavLink>

      <NavLink to={`${link}/reviews`}>{"REVIEWS"}</NavLink>

      <Outlet />

      <hr />

      {user.name && <ReviewForm />}
    </div>
  );
};

export { Restaurant };
