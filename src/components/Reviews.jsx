import classNames from "classnames";
import styles from "./Reviews.module.css";
import { ReviewStars } from "./ReviewStars";
import { useTheme } from "../hooks";

const Reviews = ({ reviews }) => {
  const { theme } = useTheme();

  return reviews ? (
    <ul>
      {reviews.map((review) => (
        <li
          className={classNames(styles.review, {
            [theme == "dark" ? styles.dark : styles.light]: true,
          })}
          key={review.id}
        >
          <main>
            <h4>{review.user}</h4>
            <ReviewStars rating={review.rating} />
          </main>
          <i>{review.text}</i>
        </li>
      ))}
    </ul>
  ) : (
    <span>no reviews found</span>
  );
};

export { Reviews };
