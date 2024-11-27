import classNames from "classnames";
import styles from "./Restaurant.module.css";
import { Menu } from "./Menu";
import { ReviewForm } from "./ReviewForm";
import { Reviews } from "./Reviews";
import { useAuth } from "../hooks";
import { useTheme } from "../hooks";

const Restaurant = ({ name, menu, reviews }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <div
      className={classNames(styles.restaurant, {
        [theme == "dark" ? styles.dark : styles.light]: true,
      })}
    >
      <h2>{name}</h2>

      <Menu menu={menu} />

      <hr />

      <Reviews reviews={reviews} />
      {user.name && <ReviewForm />}
    </div>
  );
};

export { Restaurant };
