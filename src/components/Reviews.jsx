import { useSelector } from "react-redux";

import { Review } from "./Review";
import { selectRestaurantById } from "@/store/features/restaurants";

const Reviews = ({ id }) => {
  const { reviews } =
    useSelector((state) => selectRestaurantById(state, id)) ?? {};

  if (!reviews) {
    return;
  }

  return reviews ? (
    <ul>
      {reviews.map((id) => (
        <Review id={id} key={id} />
      ))}
    </ul>
  ) : (
    <span>no reviews found</span>
  );
};

export { Reviews };
