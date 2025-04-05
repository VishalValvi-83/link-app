import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./view/Home/Home";
import About from "./view/About/About";
import Contact from "./view/Contact/Contact";
import './index.css'
import React from "react";
import Signin, { Login } from "./view/Login/login";
import Signup from "./view/signup/signup";
import Error from "./component/404";
import Createlink from "./component/createlink";
import { Toaster } from 'react-hot-toast'
import Service from "./view/Service_page/service";
import Dashboard from './component/Dashboard/Dashboard'
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/user-login",
    element: <Signin />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/user-signup",
    element: <Signup />
  },
  {
    path: "/create-link",
    element: <Createlink />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "*",
    element: <Error />
  }
]);

root.render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
