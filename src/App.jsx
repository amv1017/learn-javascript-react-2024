import { Provider } from "react-redux";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import { AuthContextProvider, ThemeContextProvider } from "@/context";
import { Layout, RestaurantsPage } from "@/components";
import { store } from "@/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantsPage />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "/restaurants/:id",
        element: <RestaurantsPage />,
      },
    ],
  },
  {
    path: "/about",
    element: (
      <>
        <p>About Page</p>
      </>
    ),
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export { App };
