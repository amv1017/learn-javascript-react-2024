import { useSelector } from "react-redux";
import classNames from "classnames";
import { ReviewForm, Reviews, Menu } from "@/components";
import { useAuth, useTheme } from "@/hooks";
import { selectRestaurantById } from "@/store/features/restaurants";
import styles from "./Restaurant.module.css";

const Restaurant = ({ id }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const { name, menu, reviews } =
    useSelector((state) => selectRestaurantById(state, id)) ?? {};

  if (!name) {
    return;
  }

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
