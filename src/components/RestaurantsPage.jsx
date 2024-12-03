import { Navbar } from "@/components";
import { Outlet } from "react-router";

const RestaurantsPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export { RestaurantsPage };
