import { useState, useMemo } from "react";
import classNames from "classnames";
import { Restaurant } from "./components/Restaurant";
import { restaurants as restaurants_mock } from "@/mocks";
import { Layout } from "./components/Layout";
import { ProgressBar } from "./components/ProgressBar";
import styles from "./App.module.css";

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
        <nav className={styles.nav}>
          <ul>
            {restaurants.map((restaurant) => (
              <li
                onClick={() => setCurrentRestaurantId(restaurant.id)}
                className={classNames(styles.item, {
                  [styles.activeItem]: currentRestaurantId === restaurant.id,
                })}
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
