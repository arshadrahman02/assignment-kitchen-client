import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Component/Main/Main.jsx";
import Home from "./Component/Home/Home.jsx";
import LogIn from "./Component/LogIn/LogIn.jsx";
import Blog from "./Component/Blog/Blog.jsx";
import Register from "./Component/Register/Register.jsx";
import Service from "./Component/Service/Service.jsx";
import ErrorPage from "./Component/Errorpage/Errorpage.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import ViewRecipies from "./Component/ViewRecipies/ViewRecipies.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Feature from "./Component/Feature/Feature.jsx";
import TimeTable from "./Component/TimeTable/TimeTable.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/service/:id",
        element: <ViewRecipies></ViewRecipies>,
      },

      {
        path: "/feature",
        element: <Feature></Feature>,
      },
      {
        path: "/time",
        element: <TimeTable></TimeTable>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
