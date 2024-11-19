import { useState, useMemo, useEffect } from "react";
import { Restaurant } from "./components/Restaurant";
import { restaurants as restaurants_mock } from "./mocks";
import { Layout } from "./components/Layout";

const App = ({ restaurants = restaurants_mock }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0]?.id ? restaurants[0]?.id : "",
  );
  const [progressWidth, setProgressWidth] = useState(0);

  const activeRestaurant = useMemo(
    () => restaurants.find((e) => e.id === currentRestaurantId),
    [currentRestaurantId, restaurants],
  );

  function displayProgress() {
    setProgressWidth(
      (100 * window.scrollY) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight),
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", displayProgress);
    return () => {
      window.removeEventListener("scroll", displayProgress);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          height: "5px",
          background:
            "linear-gradient(90deg, rgba(255,128,128,1) 0%, rgba(255,0,0,1) 100%)",
          width: `${progressWidth}%`,
        }}
      ></div>
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
