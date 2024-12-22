import { getRestaurants } from "@/services/get-restaurants";
import { Navbar } from "./Navbar";

const NavbarWrapper = async () => {
  const restaurants = await getRestaurants();

  if (!restaurants.length) {
    return null;
  }

  return <Navbar restaurants={restaurants} />;
};

export { NavbarWrapper };
