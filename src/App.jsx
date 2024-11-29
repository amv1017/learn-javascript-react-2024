import { useState, useMemo } from "react";
import { Provider } from "react-redux";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { ProgressBar } from "./components/ProgressBar";
import { Restaurant } from "./components/Restaurant";
import { store } from "./store";
import { restaurants as restaurants_mock } from "@/mocks";

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
    <Provider store={store}>
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
    </Provider>
  );
};

export { App };
