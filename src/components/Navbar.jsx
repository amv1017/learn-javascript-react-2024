import { useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { NavbarItem } from "@/components";
import { useTheme } from "@/hooks";
import { selectRestaurantsIds } from "@/store/features/restaurants";
import styles from "./Navbar.module.css";

export const Navbar = ({ currentRestaurantId, setCurrentRestaurantId }) => {
  const { theme } = useTheme();

  const restaurantsIds = useSelector(selectRestaurantsIds);

  useEffect(() => {
    setCurrentRestaurantId(restaurantsIds[0]);
  }, [restaurantsIds, setCurrentRestaurantId]);

  return (
    <nav
      className={classNames(
        styles.nav,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <ul>
        {restaurantsIds.map((id) => (
          <NavbarItem
            id={id}
            key={id}
            onClick={() => setCurrentRestaurantId(id)}
            isActive={currentRestaurantId === id}
          />
        ))}
      </ul>
    </nav>
  );
};
