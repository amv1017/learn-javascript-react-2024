import { RESTAURANTS_PER_PAGE } from "@/constants";
import { Restaurant } from "./Restaurant";

const RestaurantsPage = async ({ params }) => {
  const { id } = await params;

  return (
    <>
      {[...Array(RESTAURANTS_PER_PAGE)].map((_, k) => (
        <Restaurant id={id} key={k}>
          <h1>info</h1>
        </Restaurant>
      ))}
    </>
  );
};

export { RestaurantsPage };
