import classNames from "classnames";
import styles from "./Navbar.module.css";
import { useTheme } from "../hooks";

export const Navbar = ({
  restaurants,
  currentRestaurantId,
  setCurrentRestaurantId,
}) => {
  const { theme } = useTheme();

  return (
    <nav
      className={classNames(styles.nav, {
        [theme == "dark" ? styles.dark : styles.light]: true,
      })}
    >
      <ul>
        {restaurants.map((restaurant) => (
          <li
            onClick={() => setCurrentRestaurantId(restaurant.id)}
            className={classNames(styles.item, {
              [styles.active]: currentRestaurantId === restaurant.id,
              [theme == "dark" ? styles.dark : styles.light]: true,
            })}
            key={restaurant.id}
          >
            <span>{restaurant.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
