import { createBrowserRouter } from "react-router-dom";
import { HomePage, DetailPage } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/planet/:id",
    element: <DetailPage />,
  },
]);
