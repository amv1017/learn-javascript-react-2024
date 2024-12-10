import classNames from "classnames";
import { NavbarItem } from "./NavbarItem";
import { useTheme } from "@/hooks";
import { useGetRestaurantsQuery } from "@/store/features/api";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { theme } = useTheme();

  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

  if (!data.length) {
    return null;
  }

  const restaurantsIds = data.map(({ id }) => id);

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
