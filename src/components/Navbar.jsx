import { useSelector } from "react-redux";
import classNames from "classnames";
import { NavbarItem } from "./NavbarItem";
import { useTheme } from "@/hooks";
import { selectRestaurantsIds } from "@/store/features/restaurants";
import styles from "./Navbar.module.css";
import { useRequest } from "@/hooks";
import { getRestaurants } from "@/store/features/restaurants/get-restaurants";

export const Navbar = () => {
  const { theme } = useTheme();

  const restaurantsIds = useSelector(selectRestaurantsIds);

  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === "pending") {
    return "loading ...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  return (
    <nav
      className={classNames(
        styles.nav,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <ul>
        {restaurantsIds.map((id) => (
          <li key={id}>
            <NavbarItem id={id} key={id} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
