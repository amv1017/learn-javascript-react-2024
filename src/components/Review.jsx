import { useTheme } from "@/hooks";
import { getUsers } from "@/services/get-users";
import classNames from "classnames";
import styles from "./Review.module.css";
import { ReviewStars } from "./ReviewStars";

const Review = async ({ id, rating, text, userId }) => {
  const { theme } = useTheme();

  const data = await getUsers();

  const name = data.find(({ id }) => id === userId).name;

  return (
    <li
      className={classNames(
        styles.review,
        theme == "dark" ? styles.dark : styles.light,
      )}
      key={id}
    >
      <main className={styles.main}>
        <h4>{name}</h4>
        <ReviewStars rating={rating} />
      </main>
      <i>{text}</i>
    </li>
  );
};

export { Review };
