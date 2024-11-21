import { useState, useMemo } from "react";
import { Restaurant } from "./components/Restaurant";
import { restaurants as restaurants_mock } from "./mocks";
import { Layout } from "./components/Layout";
import { ProgressBar } from "./components/ProgressBar";

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
        <nav>
          <ul className="nav">
            {restaurants.map((restaurant) => (
              <li
                onClick={() => setCurrentRestaurantId(restaurant.id)}
                className={`nav ${
                  currentRestaurantId === restaurant.id ? "active" : ""
                }`}
                key={restaurant.id}
              >
                <span>{restaurant.name}</span>
              </li>
            ))}
          </ul>
        </nav>
        {activeRestaurant &&
          [...Array(10)].map((_, k) => (
            <Restaurant {...activeRestaurant} key={k} />
          ))}
      </Layout>
    </>
  );
};

export { App };
