import { Menu } from "./Menu";
import { Reviews } from "./Reviews";
import { ReviewForm } from "./ReviewForm";
import styles from "./Restaurant.module.css";

const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div className={styles.restaurant}>
      <h2>{name}</h2>

      <Menu menu={menu} />

      <hr />

      <Reviews reviews={reviews} />
      <ReviewForm />
    </div>
  );
};

export { Restaurant };
