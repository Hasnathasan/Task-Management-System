import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Hi from "../Components/Hi";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <Hi></Hi>
        }
      ]
    },
  ]);

export default router;