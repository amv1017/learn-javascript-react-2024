"use client";

import { useTheme } from "@/hooks";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Restaurant.module.css";

const Restaurant = ({ data, children }) => {
  const { theme } = useTheme();

  const pathname = usePathname();

  return (
    <div
      className={classNames(
        styles.restaurant,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <h2>{data.name}</h2>

      <Link
        /*
        className={({ isActive }) =>
          classNames(
            isActive ? styles.active : "",
            styles.tab,
            theme == "dark" ? styles.dark : styles.light,
          )
        }
        */
        href={`${pathname.slice(0, pathname.lastIndexOf("/"))}/menu`}
      >
        MENU
      </Link>

      <Link
        /*
        className={({ isActive }) =>
          classNames(
            isActive ? styles.active : "",
            styles.tab,
            theme == "dark" ? styles.dark : styles.light,
          )
        }
        */
        href={`${pathname.slice(0, pathname.lastIndexOf("/"))}/reviews`}
      >
        REVIEWS
      </Link>

      <div className={styles.container}>{children}</div>
    </div>
  );
};

export { Restaurant };
