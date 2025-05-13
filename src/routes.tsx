import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
