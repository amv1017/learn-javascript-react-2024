import { useTheme } from "@/hooks";
import classNames from "classnames";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./NavbarItem.module.css";

export const NavbarItem = ({ id, name }) => {
  const { theme } = useTheme();

  const { id: paramid } = useParams();

  return (
    <Link
      href={`/restaurants/${id}/menu`}
      className={classNames(
        styles.item,
        id === paramid ? styles.active : "",
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      {name}
    </Link>
  );
};
