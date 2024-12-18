import classNames from "classnames";
import { ReviewStars } from "./ReviewStars";
import { useTheme } from "@/hooks";
import { useGetUsersQuery } from "@/store/features/api";
import styles from "./Review.module.css";

const Review = ({ id, rating, text, userId }) => {
  const { theme } = useTheme();

  const { data, isLoading, isError } = useGetUsersQuery(userId);

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

  if (!data?.length) {
    return;
  }

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
