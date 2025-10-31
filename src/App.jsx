import "./index.css";
import Contact from "./pages/Contact";
import Custom from "./pages/Custom";
import HomePage from "./pages/HomePage";
import Order from "./pages/Order";
import Products from "./pages/Products"
import { ThemeProvider } from "./context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ViewDetailsProvider } from "./context/ViewDetailsContext";

const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/productos", element: <Products></Products> },
  { path: "/personalizar", element: <Custom></Custom> },
  { path: "/contacto", element: <Contact></Contact> },
  { path: "/pedidos", element: <Order></Order>}
]);

const App = () => {
  return <>
    <ThemeProvider>
      <ViewDetailsProvider>
        <RouterProvider router={router} />
      </ViewDetailsProvider>
    </ThemeProvider>
  </>;
};

export default App;
