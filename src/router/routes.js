import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home } from "../components/Home";
import { Authentication } from "../containers/AuthModule/userAuth";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/authentication",
        element: <Authentication />,
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
