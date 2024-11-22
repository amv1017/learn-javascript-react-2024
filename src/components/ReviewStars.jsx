import styles from "./ReviewStars.module.css";

const ReviewStars = ({
  rating,
  paint = (l) => [...Array(l)].map(() => "★").join(""),
}) => (
  <div>
    <span className={styles.positive}>{paint(+rating)}</span>
    <span className={styles.negative}>{paint(5 - +rating)}</span>
  </div>
);

export { ReviewStars };
