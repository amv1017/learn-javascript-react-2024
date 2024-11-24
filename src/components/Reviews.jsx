import { ReviewStars } from "./ReviewStars";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) =>
  reviews ? (
    <ul>
      {reviews.map((review) => (
        <li className={styles.review} key={review.id}>
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

export { Reviews };
