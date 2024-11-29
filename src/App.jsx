import { useState } from "react";
import { Provider } from "react-redux";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { ProgressBar } from "./components/ProgressBar";
import { Restaurant } from "./components/Restaurant";
import { store } from "./store";

const App = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState("");

  return (
    <Provider store={store}>
      <ProgressBar />
      <Layout>
        <Navbar
          currentRestaurantId={currentRestaurantId}
          setCurrentRestaurantId={setCurrentRestaurantId}
        />
        {currentRestaurantId &&
          [...Array(10)].map((_, k) => (
            <Restaurant id={currentRestaurantId} key={k} />
          ))}
      </Layout>
    </Provider>
  );
};

export { App };
