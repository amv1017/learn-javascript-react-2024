import { Menu } from "./Menu";
import { Reviews } from "./Reviews";
import { ReviewForm } from "./ReviewForm";

const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div className="restaurant">
      <h2>{name}</h2>

      <Menu menu={menu} />

      <hr style={{ margin: "20px" }} />

      <Reviews reviews={reviews} />
      <ReviewForm />
    </div>
  );
};

export { Restaurant };
