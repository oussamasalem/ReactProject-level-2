import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";

import Profile from "./pages/Profile";


//level 2 for useContext
import {useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import "./theme.css"

import Signin from './pages/Signin';
import Signup from './pages/Signup';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>sorry ! </h1>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
]);
function App() {
  let {theme} = useContext(ThemeContext);
  return (
  <div className={`${theme}`}>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
