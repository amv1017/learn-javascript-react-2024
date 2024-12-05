import { useSelector } from "react-redux";
import classNames from "classnames";
import { NavbarItem } from "./NavbarItem";
import { useTheme } from "@/hooks";
import { selectRestaurantsIds } from "@/store/features/restaurants";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { theme } = useTheme();

  const restaurantsIds = useSelector(selectRestaurantsIds);

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
            <NavbarItem id={id} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
