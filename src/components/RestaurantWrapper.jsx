import { getRestaurantById } from "@/services/get-restaurant-by-id";
import { Restaurant } from "./Restaurant";

const RestaurantWrapper = async ({ id, children }) => {
  const data = await getRestaurantById(id);

  return <Restaurant data={data}>{children}</Restaurant>;
};

export { RestaurantWrapper };
