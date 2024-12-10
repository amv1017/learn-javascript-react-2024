import { useParams } from "react-router";
import { Restaurant } from "./Restaurant";
import { RESTAURANTS_PER_PAGE } from "@/constants.js";

const RestaurantsPage = () => {
  const { id } = useParams();

  return (
    <>
      {[...Array(RESTAURANTS_PER_PAGE)].map((_, k) => (
        <Restaurant id={id} key={k} />
      ))}
    </>
  );
};

export { RestaurantsPage };
