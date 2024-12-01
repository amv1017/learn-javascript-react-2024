import { Provider } from "react-redux";
import { AuthContextProvider } from "@/context/Auth";
import { ThemeContextProvider } from "@/context/Theme";
import { Layout } from "@/components/Layout";
import { RestaurantsPage } from "@/components/RestaurantsPage";
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
