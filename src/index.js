import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Animaisrandompage from './routes/Animaispage';
import Galeriapage from './routes/Galeriapage';
import Navbar from './components/Navbar';
import HomePage from './routes/home';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: '/animais',
        element: <Animaisrandompage />,
      },
      {
        path: "/galeria",
        element: <Galeriapage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
