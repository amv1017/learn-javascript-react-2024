import { Restaurant } from "@/components";
import { useParams } from "react-router";

const RestaurantsPage = () => {
  const { id } = useParams();

  return (
    <>
      {[...Array(10)].map((_, k) => (
        <Restaurant id={id} key={k} />
      ))}
    </>
  );
};

export { RestaurantsPage };
