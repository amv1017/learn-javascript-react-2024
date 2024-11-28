import classNames from "classnames";
import { useAuth } from "@/hooks";
import { useTheme } from "@/hooks";
import { Menu } from "./Menu";
import { ReviewForm } from "./ReviewForm";
import { Reviews } from "./Reviews";
import styles from "./Restaurant.module.css";

const Restaurant = ({ name, menu, reviews }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <div
      className={classNames(
        styles.restaurant,
        theme == "dark" ? styles.dark : styles.light,
      )}
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
