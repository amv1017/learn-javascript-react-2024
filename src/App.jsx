import { Provider } from "react-redux";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import { Layout } from "@/components/Layout";
import { RestaurantsPage } from "@/components/RestaurantsPage";
import { HomePage } from "@/components/HomePage";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { DishInfo } from "@/components/DishInfo";
import { AuthContextProvider, ThemeContextProvider } from "@/context";
import { store } from "@/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Navigate to="/restaurants" />,
  },
  {
    path: "/restaurants",
    element: <HomePage />,
    errorElement: <Navigate to="/restaurants" />,
    children: [
      {
        path: "/restaurants/:id",
        element: <RestaurantsPage />,
        children: [
          {
            path: "/restaurants/:id/menu",
            element: <Menu />,
          },
          {
            path: "/restaurants/:id/reviews",
            element: <Reviews />,
          },
        ],
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
  { path: "/dish/:id", element: <DishInfo info /> },
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
