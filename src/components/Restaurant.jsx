"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import { useTheme } from "@/hooks";
import { useGetRestaurantByIdQuery } from "@/store/features/api";
import styles from "./Restaurant.module.css";

const Restaurant = ({ id, children }) => {
  const { theme } = useTheme();

  const pathname = usePathname();

  const { data, isLoading, isError } = useGetRestaurantByIdQuery(id);

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

  if (!data?.name) {
    return;
  }

  return (
    <div
      className={classNames(
        styles.restaurant,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <h2>{data.name}</h2>

      <Link
        className={({ isActive }) =>
          classNames(
            isActive ? styles.active : "",
            styles.tab,
            theme == "dark" ? styles.dark : styles.light,
          )
        }
        href={`${pathname.slice(0, pathname.lastIndexOf("/"))}/menu`}
      >
        MENU
      </Link>

      <Link
        className={({ isActive }) =>
          classNames(
            isActive ? styles.active : "",
            styles.tab,
            theme == "dark" ? styles.dark : styles.light,
          )
        }
        href={`${pathname.slice(0, pathname.lastIndexOf("/"))}/reviews`}
      >
        REVIEWS
      </Link>

      <div className={styles.container}>{children}</div>
    </div>
  );
};

export { Restaurant };
