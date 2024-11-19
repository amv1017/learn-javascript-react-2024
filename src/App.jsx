import { useState } from "react";
import { Restaurant } from "./components/Restaurant";
import { restaurants as restaurants_mock } from "./mocks";
import { Layout } from "./components/Layout";

const App = ({ restaurants = restaurants_mock }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0]?.id ? restaurants[0]?.id : "",
  );
  return (
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
      {restaurants.map(
        (restaurant) =>
          currentRestaurantId === restaurant.id && (
            <Restaurant restaurant={restaurant} key={restaurant.id} />
          ),
      )}
    </Layout>
  );
};

export { App };
