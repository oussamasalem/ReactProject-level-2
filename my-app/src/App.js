import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import JavaScript from "./pages/javaScript";


//level 2 for useContext
import {useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import "./theme.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>sorry ! </h1>,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <JavaScript />,
  },
]);
function App() {
  const {theme} = useContext(ThemeContext);
  return (
  <div className={`${theme}`}>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
