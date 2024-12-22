"use client";

import { useTheme } from "@/hooks";
import goback from "@/static/go-back.svg";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./DishInfo.module.css";
import { MenuDish } from "./MenuDish";

const DishInfo = () => {
  const { id } = useParams();

  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      <Link
        className={classNames(
          styles.link,
          theme == "dark" ? styles.dark : styles.light,
        )}
        href={"/restaurants"}
      >
        <Image
          width={10}
          className={classNames(
            styles.icon,
            theme == "dark" ? styles.dark : styles.light,
          )}
          src={goback}
          alt="go back"
        />
        {"go back"}
      </Link>
      <MenuDish id={id} />
    </div>
  );
};

export { DishInfo };
