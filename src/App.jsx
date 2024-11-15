import { useState } from "react";
import Restaurant from "./components/Restaurant";
import { restaurants as restaurants_mock } from "./mocks";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = ({ restaurants = restaurants_mock }) => {
  const [active, setActive] = useState(
    restaurants[0]?.id ? restaurants[0]?.id : "",
  );
  return (
    <>
      <Header />
      <nav>
        <ul className="nav">
          {restaurants.map((restaurant) => (
            <li
              onClick={() => setActive(restaurant.id)}
              className={`nav ${active === restaurant.id ? "active" : ""}`}
              key={restaurant.id}
            >
              <span>{restaurant.name}</span>
            </li>
          ))}
        </ul>
      </nav>
      {restaurants.map((restaurant) => (
        <Restaurant
          restaurant={restaurant}
          isActive={active === restaurant.id}
          key={restaurant.id}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
