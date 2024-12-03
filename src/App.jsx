import { Provider } from "react-redux";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import { AuthContextProvider, ThemeContextProvider } from "@/context";
import { Layout, RestaurantsPage, HomePage, Menu, Reviews } from "@/components";
import { store } from "@/store";

const router = createBrowserRouter([
  { path: "/", element: <></>, errorElement: <Navigate to="/restaurants" /> },
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
