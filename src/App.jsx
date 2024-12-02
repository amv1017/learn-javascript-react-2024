import { Provider } from "react-redux";
import { AuthContextProvider, ThemeContextProvider } from "@/context";
import { Layout, RestaurantsPage } from "@/components";
import { store } from "@/store";

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export { App };
