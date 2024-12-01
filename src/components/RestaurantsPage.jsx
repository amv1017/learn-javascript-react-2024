import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Restaurant } from "@/components/Restaurant";

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
