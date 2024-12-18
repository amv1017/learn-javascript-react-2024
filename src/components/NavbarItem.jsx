import { useParams } from "next/navigation";
import classNames from "classnames";
import { useTheme } from "@/hooks";
import { useGetRestaurantByIdQuery } from "@/store/features/api";
import styles from "./NavbarItem.module.css";
import Link from "next/link";

export const NavbarItem = ({ id }) => {
  const { theme } = useTheme();

  const { id: paramid } = useParams();

  const { data, isLoading, isError } = useGetRestaurantByIdQuery(id);

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

  if (!data?.name || !data?.description) {
    return;
  }

  return (
    <Link
      href={`/restaurants/${id}/menu`}
      className={classNames(
        styles.item,
        id === paramid ? styles.active : "",
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      {data.name}
    </Link>
  );
};
