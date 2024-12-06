import { useSelector } from "react-redux";
import { Review } from "./Review";
import { selectRestaurantById } from "@/store/features/restaurants";
import { useRequest } from "@/hooks";
import { getUsers } from "../store/features/users";

const Reviews = ({ id }) => {
  const { reviews } =
    useSelector((state) => selectRestaurantById(state, id)) ?? {};

  const requestStatus = useRequest(getUsers);

  if (!reviews) {
    return;
  }

  if (requestStatus === "pending") {
    return "loading ...";
  }

  if (requestStatus === "rejected") {
    return "error";
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
