import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Page2 from './Page2'
import './index.css'

import {DataProvider} from './context/DataContext';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>ops!!!!!!!!!!!!!!!</h1>,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
)
