import { Menu } from "./Menu";
import { Reviews } from "./Reviews";

const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurant" key={restaurant.id}>
      <h2>{restaurant.name}</h2>

      <Menu menu={restaurant.menu} />

      <hr style={{ margin: "20px" }} />

      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export { Restaurant };
