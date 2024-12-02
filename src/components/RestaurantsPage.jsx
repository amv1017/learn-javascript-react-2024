import { useState } from "react";
import { Navbar, Restaurant } from "@/components";

const RestaurantsPage = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState("");

  return (
    <>
      <Navbar
        currentRestaurantId={currentRestaurantId}
        setCurrentRestaurantId={setCurrentRestaurantId}
      />
      {currentRestaurantId &&
        [...Array(10)].map((_, k) => (
          <Restaurant id={currentRestaurantId} key={k} />
        ))}
    </>
  );
};

export { RestaurantsPage };
