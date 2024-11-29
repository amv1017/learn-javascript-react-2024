import classNames from "classnames";
import { useTheme } from "@/hooks";
import { ReviewStars } from "./ReviewStars";
import styles from "./Review.module.css";
import { useSelector } from "react-redux";
import { selectReviewById } from "../store/features/reviews";
import { selectUserById } from "../store/features/users";

const Review = ({ id }) => {
  const { theme } = useTheme();

  const { text, rating, userId } = useSelector((state) =>
    selectReviewById(state, id),
  );

  const { name } = useSelector((state) => selectUserById(state, userId));

  return (
    <li
      className={classNames(
        styles.review,
        theme == "dark" ? styles.dark : styles.light,
      )}
      key={id}
    >
      <main>
        <h4>{name}</h4>
        <ReviewStars rating={rating} />
      </main>
      <i>{text}</i>
    </li>
  );
};

export { Review };
