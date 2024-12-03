import { Provider } from "react-redux";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import { AuthContextProvider, ThemeContextProvider } from "@/context";
import { Layout, RestaurantsPage } from "@/components";
import { store } from "@/store";
import { RestaurantsDetails } from "./components/RestaurantsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantsPage />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "/restaurants/:id",
        element: <RestaurantsDetails />,
        children: [
          {
            path: "/restaurants/:id/menu",
            element: <p>!!! Menu !!!</p>,
          },
          {
            path: "/restaurants/:id/reviews",
            element: <p>!!! Reviews !!!</p>,
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
  // {
  //   path: '/info',
  //   element: <h1>INFO!!!
  //     <Outlet />
  //   </h1>,
  //   children: [
  //     {
  //       path: '/info/phone',
  //       element: <div>...PHONE...</div>
  //     },
  //     {
  //       path: '/info/adress',
  //       element: <div>...ADRESS...</div>
  //     }

  //   ]
  // }
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
