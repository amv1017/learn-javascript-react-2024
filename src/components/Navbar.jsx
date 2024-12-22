"use client";

import { useTheme } from "@/hooks";
import classNames from "classnames";
import styles from "./Navbar.module.css";
import { NavbarItem } from "./NavbarItem";

const Navbar = ({ restaurants }) => {
  const { theme } = useTheme();

  return (
    <nav
      className={classNames(
        styles.nav,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <NavbarItem {...restaurant} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
