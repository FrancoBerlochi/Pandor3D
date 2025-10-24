import "./index.css";
import Custom from "./pages/Custom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/productos", element: <Products></Products> },
  { path: "/personalizar", element: <Custom></Custom> },
]);

const App = () => {
  return <div>
    {<RouterProvider router={router} />}
  </div>;
};

export default App;
