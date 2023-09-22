import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);

export default router;