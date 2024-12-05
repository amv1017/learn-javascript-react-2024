import { useParams, NavLink } from "react-router";
import classNames from "classnames";
import { MenuDish } from "./MenuDish";
import { useTheme } from "@/hooks";
import goback from "@/static/go-back.svg";
import styles from "./DishInfo.module.css";

const DishInfo = () => {
  const { id } = useParams();

  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      <NavLink
        className={classNames(
          styles.link,
          theme == "dark" ? styles.dark : styles.light,
        )}
        to={"/restaurants"}
      >
        <img
          className={classNames(
            styles.icon,
            theme == "dark" ? styles.dark : styles.light,
          )}
          src={goback}
          alt="go back"
        />
        {"go back"}
      </NavLink>
      <MenuDish id={id} />
    </div>
  );
};

export { DishInfo };
