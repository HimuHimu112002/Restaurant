import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  
  {
    path: "/contact",
    element: <Contact></Contact>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

