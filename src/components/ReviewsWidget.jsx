import { useParams } from "react-router";
import { Reviews } from "./Reviews";

const ReviewsWidget = () => {
  const { id } = useParams();

  return <Reviews id={id} />;
};

export { ReviewsWidget };
