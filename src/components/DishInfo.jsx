"use client";

import classNames from "classnames";
import { MenuDish } from "./MenuDish";
import { useTheme } from "@/hooks";
import goback from "@/static/go-back.svg";
import styles from "./DishInfo.module.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
