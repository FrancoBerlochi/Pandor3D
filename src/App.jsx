import "./index.css";
import Contact from "./pages/Contact";
import Custom from "./pages/Custom";
import HomePage from "./pages/HomePage";
import Order from "./pages/Order";
import Products from "./pages/Products"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/productos", element: <Products></Products> },
  { path: "/personalizar", element: <Custom></Custom> },
  { path: "/contacto", element: <Contact></Contact> },
  { path: "/pedidos", element: <Order></Order>}
]);

const App = () => {
  return <div>
    {<RouterProvider router={router} />}
  </div>;
};

export default App;
