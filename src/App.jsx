import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { ProgressBar } from "./components/ProgressBar";
import { Restaurant } from "./components/Restaurant";
import { restaurants as restaurants_mock } from "@/mocks";
import { useState, useMemo } from "react";

const App = ({ restaurants = restaurants_mock }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0]?.id ? restaurants[0]?.id : "",
  );

  const activeRestaurant = useMemo(
    () =>
      restaurants.find((restaurant) => restaurant.id === currentRestaurantId),
    [currentRestaurantId, restaurants],
  );

  return (
    <>
      <ProgressBar />
      <Layout>
        <Navbar
          restaurants={restaurants}
          currentRestaurantId={currentRestaurantId}
          setCurrentRestaurantId={setCurrentRestaurantId}
        />
        {activeRestaurant &&
          [...Array(10)].map((_, k) => (
            <Restaurant {...activeRestaurant} key={k} />
          ))}
      </Layout>
    </>
  );
};

export { App };
